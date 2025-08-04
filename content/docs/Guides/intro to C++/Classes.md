---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLHC54J%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHox1CC%2Bet8rlWGLeQE9zjKt2VN5M7Tua0%2FEnAqtYNziAiAa7vAPlG51Z7ALB1Y6M%2BD%2FJ7zaLMqKS40HS%2FlEYW6tqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMVuWJTiNu%2FfrpABd6KtwDL2CvK7Osw3%2FWeLkhWe6cCQeRVvTkHeVtrvp27EzFVWpczVznvO4yBlghTOJhT4OoLsHWDPXYCfrzDy9hQYKjO%2F8l14FpdO7nwsJa8%2FEsYWVYhUCwm9W5F4QgPrbPVhEK7NL0xNnSFVplHHx63m6FEmUBY81eL1JtmaLGRUWocxcWvV%2FvKKSgACkrpfrBA%2BBr%2BSYINLt7DAHTaWQuffUXBmEA3ZWld%2BxlEhqwEh5NqVCq0mKjr43dYcuYwZP%2F984hJK7iXvMA3LcNPpSs%2B1ZQi33VXV4fnVbam56sXF2NqE8ZP4tLNDA6S7eV1McJ5uPqI3iEIsd2owRHoWIie350ZoBux95wOz5YU3OclCItgUvJQwH6xdcInk7EjcbDYbnzIZpbKurwXy58EBQKchA4lAR9q4Asi3UaUQKAbz62rJEfmPa6EMNt6Bd%2F5Arg5EXTKzgGHPrjZGfonICIHKaVQ%2F6LX00DVIHi2arA%2BUjUEl8qIPH%2FuLVJCVYJiXMvBFdLunAVPboED2QjWRAHjGSjooKOejw1zfPtQ%2BNaBIWO36hkbkTx04DbQ8xFw0c1W0fEgo2MPZT7lpUPJxQ8N8sgBhe0Vz1gY9uTcFj8Jh0%2BXyL4NXNjr1BnAzJNUHkwgPnDxAY6pgGyV55ycRqmT8aNHgY4oCx53UboyqEw33s3SYO9BXEsvw0z%2BArZ63lwbjw5%2B%2Fkn4r%2FnZ5UAJWg91azJME0B5OUTxhx5zy1Y0mmac3J3Jk%2BtsfBcJEXi1m2mdRoz%2FowMMUH0hPE6MYie1eMp4wXR8eIK4AMv7qKdodngTphtoBTbQhQUKtX9K22p0qszMswh7%2BEd4G6SR5WpUbtGws0hkQYqmkAFwTMo&X-Amz-Signature=4419528f94f3731d6dd6a9fe11e2f2a33371b50e41dd4ae0ecbc340add6ebaa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
