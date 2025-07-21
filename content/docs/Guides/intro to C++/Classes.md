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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AWEZFOY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQ0lee10PTqoCBcMXPvT%2F30KWOmXS6SE%2FxCmqf6dcgEAiB93pu6Q7Awck7ztrCbPxWme8%2FsggW1XOoHjSor7OybLiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3nL2Nj8hg8tFn4NgKtwDG6i%2FCNhb0GoNnfgFfb72DE2K%2B7uPjO6RDs84hLJDJBcuI%2BJuJI3Nn5c%2FJt0UmfezcvYr8UM1k%2FgH2Qf4QbWa3xQKiLiQvuMFgRTaoo89e8gCAxT4%2FP2C8FUC91fxUerW%2BbG9n%2FYRWImdrdRD49mILoIJp7FV%2B68gh3O9vcVVEGzxq7YXMvPPicY7TBmohZgnMVm9m0WKuOR%2B%2BX8Hg6DJg68Eksn%2FT3KYChr05r2YYp8tbbNW6Rtydw5EdrBh%2Fxv7whIYrXB1vkK7O0UwvBz9t2I1We2BgqwevtkCZBKDZSI47fWK%2BJ4kUPNEHAnvYJC%2F0nvSW43O07HoAoL1glaRNqFNfB5oJUkArYlUwVWa9VBySbg%2FZItgI7q0QLJer9TdquxZUgtkIoO7rILRm16f1Dm7SDnWONiqVv4A%2FQVZdC2pxQxllVioKbhJxtNfn%2FSVKQvVOnSVmINp2O5zAc0MEMKUzh2XNNLtZgNbaqKMfGrMUWhKr4j0ZwqqPQP%2FiVjy%2FIZv1iFXTrITgZmXTzqQba56S8uicBvHryYq5o8uCaoqDgSCIeTAoix3kEK7BAN3YpGVotUlt1rSVE8eFSnFG%2B6fEjA0hId0UyqC%2Ft%2BQsxhGcb1e77G55Sql9Q0wntT4wwY6pgGLQ535pNcYNnKinM4zSoiAbAfBpGwN6u6tLFqZ3dkrN7NJv8hpmrHthxWHqDYoMHmkHNBOT3DTAyMjE8EkXKKdnfandIwsU4DTuYFw%2FklvTcYyEamTZaS9j2Z8U%2Ba1Fl0kHfW%2BtHQ19lmJaKrL9kunAEc9j2YuA%2FtRhV60KJl4KVkBFNv3Rx1pNmPCbiDEuA0y8R1bTCXVxPmOYkpqoy%2FdQYbm8uKg&X-Amz-Signature=4c3d9116a9185cbc43a6092528f9d0ccdd8f50b2f37b22f9eeb84e4490a97189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
