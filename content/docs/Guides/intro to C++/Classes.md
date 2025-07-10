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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGCSYRT%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXRjursgwFGSoEJyfDFjq8Gi5yhAz5vfmEbHqF7ktq5AiBKxaoToezurGxp7vN1BcYWufyBjrkdbJP8O1AgyVAWnyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYFzBNN%2FuhTIXcSWqKtwDwhZAkxVTsQMChYH4C9kQVF%2B4jTkK3sJfKniJ4SqvyZLO3lJt62KvZH73Mb0mN7f49XdeJ5zfwubuOVrlLS1Kmeoag6SKeTWlTGHQI7YE%2FBPTnamHq1FkGl0t3eDim9fEf4yoofaZQL2nSXP9oKtxLOTBc36S1%2F0589FBgvRjdbPl96NTIeI%2BBOUb5GYhxwMzjjJhaCjv58RRlS4aOY%2BCfrzT5Gx%2FQknLG0329QEG0aP9EkKDoBWokhHRvLFyQ9iKIiN6SJWdBSnXiOnZEncT1yaqYz9jjn0C8FRDqxxvawhT3PWqnAm4l8ch8iqNIAsqVXoX23VFZEbmUykibvRglD%2FbP9SoDaDO1gkne8NsGzWC8zIaV9Jnt8iahS0sFbhHtnabb%2FkWuoxHQufoBnVYSgOgR1MZKseoamo14a%2F4c7NjWz%2Bj3gIpQaicAKbuxYWXl%2FQUFTK%2FZX2im96ikrRUQlnlBw91126jDAbxKV9Na1btXD4CONIySJPW%2BZTkuSmd4XE0LyfKqxsKMe1OqCJgnXPbghYBzeNw9SVIEL1%2F%2FzC1Bl8AFBXh9sD%2BayylqMYwSIWItu3b1%2FNoYxSzgRYiHbR3CAvUHA8EDuOy0Wdmg%2BigcF5EskrLAII8IQgw5YC%2BwwY6pgE8CRJbN2ZvcjrFXorsEMSJATEqMsvSeACu6mbD1nO9MhEV8OjoAbooTzkVgty4KSG8BM%2FUyr7i5IBv%2FGppmsmURcOZo6CMJuDSS81j2i92C4pY1KmXGSYxhnL6vLNt%2FWdE1CCeCkNfVpzPl9Q6SGEKJwtHQLPrjtBvFyKY%2BrVx9au90YyaerTlZ00KQSlhxo%2BMp7I0hHrhQZjp9fKFiVADTwZ5u9pX&X-Amz-Signature=f36be1f657a338fad6a42cdd6e82290f6c97058f05acf43b6dec495b7395281b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
