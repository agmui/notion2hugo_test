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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U62TFVNH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJGMEQCIElNoRoHm9mlZ5Pk0oGc%2BGGOizO3H0lKFt6FjiR77E9uAiAGlDW8ldty7s57HGM7SNHJvoaHH%2FuYV6v0lWI%2F2sQESSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPs7S7390ZBqXnF3IKtwDMuVxF%2B4J4U4E0wOpr%2BBPmqT%2Bt253Y004lVqt5ZoTflFmvFV5L%2Bcq%2BmdhlHV1lLcebnqPu%2BuZY%2FIjmkBz2LGT5227RmhVryq5NHbMGWdo99O03TDGh4UuPt8HLbqgkf3Nq%2B9354XaKvsA5Y0c4fZDIkXWVhsY30fWq7JkcsAq9sjHCdNdDoM7IfV8%2FmLf3egkAnKijmP4a02EkVQ7T0QgwElqOrZLYD7YVBdioob55XsJtlK8Mmv9KDAWbcUTjMCnP1cY7oMS6IlFkeewvfzFMccEWmxhkn9mY3VVnmnL6EaE0xzi4yq90mBCtFtqT88xtEq0ctR0d9l6XIMR15jmjf9FWIO2RihgQHzsNoqhofu1hh8OawAs4xS%2BP%2BrCjTv5ic1oMnn6E9uSc2hUJ2Ie5pbNcpT2SV1rT%2FBzR69MfxvD0d3bCZNR4aoyzHSS6VsA2U5Z5bfdz1mfAKycxlUr4PLG7n%2FQNfcxB1sTW4bNcEIaW0Ckm%2FbIgkrXwTmZNb%2BUFWOs1wT6a2FbBvzi%2Bdka3Kd97So0wUHB8Z4y7ltaZR1eXYgDHRNVCW2ClaHKnr5wrGOmbwGb5%2BrzKGYepyLZ2kc8a9d%2B3NxiZ4NWAWsJtSaihXUk8GxTJj8oaBQw58yQwAY6pgHOSQbYlrEUfYE6cTlcYeiEuQWjwHFrx2sHtsW1h%2BD5atERwIGirjha8ddtd0lK6dsK9r9JP2GVsLtyJnFJFLRruCpkkCb7qyuS7lvBgRvWqaV8V3LRwMslh1OB%2FW2Z%2BbNrVKi%2FhWTo7IqAS%2FQkWaeGTI8wBKfSxlRh72n3G2YJ95o%2BQzWaDD9o4Z%2FPyQsVQJmC7rv2KiIB%2BqH6JCl11CLD%2FYTaIquG&X-Amz-Signature=0ed28a604f336f8526ddfab03d218a965fcbafd4136c74bcced24fdff7f5c93e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
