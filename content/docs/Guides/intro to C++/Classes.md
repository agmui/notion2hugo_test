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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AIMXLC%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFD0b6A7SWf35LbMPSTizfOuKB8WiD1HfE0rG2g%2Ft0qAIhAK%2FoHzTWmIHNVhe6hliNX0x6nUEWWCF0kDcNXPPvDzCmKv8DCGIQABoMNjM3NDIzMTgzODA1IgyfxEXvm%2Bf%2BHfbYH28q3AN4Rq3lD4ZM1wv%2FBNbTswaBqfR5R%2F79EL1GaxBml%2FRrebAQayvW6MUXzHlVH7wt73I4DdDkPjLkLAjBOpOZAmG6CHNuG7UrhDPLGy1npA5%2FGeMMygJO8ho3VeQ9FIarUelf%2BwOFFmxo1uViRFRCJ3tcBIQEajXPZIeASQb%2FPqaW2iVGcV%2ByuK%2BXFvMEPKir7ypbzlkK6XTSlcftYRjLV6vLp9SDOTHllbgzXiUWFAEabnv4pRhmBEqA2FHqurzFdZBJTXb6SdhVXc%2Bv0t1mBE0bo6zFgKFJNfVTsBfNQsG8AfpPjW6GrFyBIeQlql35qImUpkH0Y2QsS7O3zFNI0Jh2c3V0%2BXCWIkeGv2407Dm9z9t7fuzt9b3lyYil%2FMpJ0zQX7Ru4IO9BEwJkr2VkvgTRohQt4S6sj3kK4lgsuxXw3J3VPdQFcAdhh3kekdRNSbNn%2B0RNaAsb9kNSJZm0NZsBA0Yu0kDkPbvcoVxGiUuvX7Ck7YiLqakN1ytYs7QoBpeBBdp3RM0S9NkDoXMjJfiJOAlF7SW7SLltdmr%2B0HvY0HHKJEFOHTssmU4LwDalBXV1YdKpYPCzWsduNCylttTPw0I%2BhtIWQvKwAwP0gFzEkpcf7tDGbCxDq1G6mTD15bzKBjqkAR1wskDvLPw%2Fs67Td4KnVrEWPRLNXCD9oRmqGiFom51lshXZC%2BbGaKiyHS1HDtAbe4Cc2FuTksTjnYVpSZN9iOwC%2B100unr8Sn8%2FaoQ%2B6EHTAJTxnPo1JEpUTIv4eF3GT2ZlJ1G16T5kCfsUDI4II6aJKBl4Ea1o9E%2Bhnz6yzPFGdjJpaWTU8BZFNN9oRprIz6b5R0QWWQSJFRIXCGsuwbh6fcNT&X-Amz-Signature=88d9a877c5ec528103d20a37289730e29e72bfca53cc76d0614980271e058377&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
