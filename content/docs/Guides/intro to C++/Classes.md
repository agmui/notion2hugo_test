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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5RN47DY%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDff7RDh0AkPkXRwskJ95acld6Mr1%2FL%2BLZvW3TnBhDgLAIhAK%2BoJZTTwSZlFjkueeJtU16yBZtmcqODyA9waOLPTjaaKv8DCBYQABoMNjM3NDIzMTgzODA1IgzPyqc%2FuPbJyovBu8gq3ANFw8fYrf5eniEnUT0XNe6owii10J5%2F9DGflNBIDWzdV9%2Fb34CEA1pgoVAqiNi8PWE%2BxNfWJP040y3rsL%2FD9%2BZzkhuyUz0tB1brauMTWV7fclfTr%2BRUbewbOjuBjTmNsOrK899x7S9J5rcKyRm72%2Fh7oiwoDA6KQNjKTAr7Yz2UkZULgkyznt6%2BdwXdudfdaDWWjHxznZjYOuthrI8ShvYDLrpXW%2BLReSYF3UpC38OC6pi0N3XB4aMW0GWp7l6FQHp7M0bbMtwDtwI2l9QDcWwKPCzdrBW6Xcy3WPlOxskgqQk9yS4CdjWfqVTohc1GYNKsnKu%2FxRc7z0%2BStff6cwqr6GyEGAJ5YZbg72KlItRbjnOfoDINi3DldIqvz9fSRTSxEWh4pq467Lmc8Q2uRhzYhJF2GShzKQ90wmKgTXFujGn8QqauULtqCLpz4XOyYHybJgrz0bUvfPiu4Eg1XM4rqYcOhNXyKJgXhYRKegGpV4jpsTSbj%2F1j9DWo1ZU5ovzqdFOhXadSFGixc%2BXNYUMNt19JGC%2BfgdCdlKCHUnHzqjRLbddZQINIMjyfIYyAx5c9FCM2p80eUb51gSrYUgpMVlr0VmcvKZW4dETt%2FGL6YqPUP4c%2BYWwiEPg0djCV3be9BjqkASFhA1jwxElzLU0APJ6ohDGfz95c764RzevbogUa%2BnTRJ%2BjjW4aNQEMeDNIF7bUd8FGAfzx6nfMo0EvnWsRwmrGUgDLJ9rUw3Tw%2FzkS0t8kKHFsI1Z3ngVOTKP18Ds87Uaquebg02ck0mXx12uZNOa3TJW7aCbTVE5LsaZDbhoCoBrgLUs3XvT1mbRKb9%2BBOTn%2BmdeGZIYnCBPE%2Fn3v6xwfZ5cgC&X-Amz-Signature=2ecb902aa35315d735a1ad4aa463714a31b54f9b65177b6822b85f367130f561&X-Amz-SignedHeaders=host&x-id=GetObject)

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
