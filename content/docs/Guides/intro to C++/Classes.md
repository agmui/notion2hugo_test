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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HXOE2XF%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCIwwQK5Zpj7blBLfZIEO%2BZk2YN2nSzPt5xi1nwBRmeAAIgI9GdQiZlt2oEqD1pCBQfg1WGs%2FRBWDZrholcxg7ONSUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsT8uDRkJuQy6p4nyrcA7VQgwVcZOrij1aaYrWba5bL%2F6PIwF3Cc1f6wEzs5p%2B2wNLDRgCjteMVYEIQJyxMqIwZpECUe9ZxwWcU3tMUIPZ1JRTPp%2FB%2F3FsGP%2BTvE%2FFYSbT4iYv3wwnbrumeKBDl8WMpQrAjCtRxQxvt4Py5PvOyUDd5IWWUCZEuPjn8jN3rcj9E212%2FK7L5ASjKZHj5IxCjzB81FYcBhFfq62qaqa5tfsEAkBxj7ViLeB8kPnwwBQ3lajcWihfkn5KenyCIAuSmIwExvo8Y2CqYw2GkTpfkSzh8c%2BtvBooR0xX9ZGcoqVOwQvlwxK2J9sN%2BkPsmg3rYAMFua%2B7%2F0r19vEbFblKbsWRWlKAZ4ec2aOekJXb3Qb4zb%2F%2FqNrkz7vqnB35hn7hCaL8a04o0pvsGLezUIz70x72sa69EKrYuOsSgCJQDT4LP%2Fhu3V9ftNRnh2CcCBerB0tMV8dOp%2FBwTXdIK1%2FrSUthbrVab5wrGxZk09RUJmYb%2Bfj7sYEU2Q9F6jESnOupDd2Az4zy8as34Bqjx4KI0hsBMa5FAgQxfFRrJSPdQygImFFktL0c%2F%2BnveEotBV%2FHkFwkD75ZCoBGjumxAee9I%2BV5ENRSSpgA1kyDH565D%2FF5RSZ%2FSu1NpGVGSMNSG1sAGOqUB5zot%2BAXKUgsXYygNkn9Q%2FgQpOuKdMNe5k9sF6035TrbFDhC518q%2FJpEP6tuA0AQ9NuH2k77U5U7iw4wimmXlnr9n2b%2Bu%2FUHEAYrnINixDw0GzD7d66xsXMTCRsvCUO7KxbL8xNrxR6AvxENrlA2z1DCI%2FQqDuGGK3lxJ8I4%2Bx%2Fi%2FyIKyNYoknvXND01imM9IHxB%2BqQ4zCib9sggEvvwVtlDvcjH6&X-Amz-Signature=6fee987c49b6c147739edac43c34c8915e29333461f5157cd63162ac624c5e35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
