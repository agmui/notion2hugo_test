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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV3OTZVY%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpHGiZMzkJSFtICPLwJvl0fONLzKjI3pEjNMyheSOAwgIgPE%2F5h4ED9r6n87U68iwkQ3t1T2fFSOy3pjAVWlMVraAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKZ8ne76pmUJ%2BgaNxircA%2BJ9z4eF%2FX01IkYhIr1c%2F2ELZ4buTYbFdK2PUZMdmPWTnv7zvk8wro6sWPmhXqBZpKSWU7eexPQDdn83MO45iP704tNo4psNRPUjJR7nNNRWemXiec2p44VZMBApJqcvw14AroJ8%2FVc%2F8SqVaNpvrOJ1mrfe2JPcuVtPsF3ahVnBwCBJewGu9dM9I521%2Bc2%2BsOKTjBIbKJu2BNBPG6BeuheT9B3i4kVAmbC6C7BZS6gY7sbZHJhVloMM%2FXIoYpIo7UhjAyv1a%2BJ6a0MuWyVsGe5PGqqcHvRR7fpWP%2FEn7oJx3RrKI1HDB%2BApI2IsmxQxDjjdbtYWioUEMxK9oUtGtJXfn%2FfIaK61HZOoBXV%2BEAJShtKMAskfk2Ke364wa12G6W%2F0%2FXpAdYEnSSYAndfK7ts%2FarZ10zZot664%2BUin7KdOoy9Q5Ls7k%2F9SLJ990nFfumo9Di1LGXXJo7I8t0bKid%2B%2F27P%2F9XrQeAMwIyZweSWRHMat%2FHhpCxpaa0SgV6JA%2BgYEHUm9V8Pm035wdzZjAqv5jZlKt9EOcxIHsnZ6FNZafYyXbqBiivHm7B6JXa2zg8%2BEKXwKIHl%2F6qDsXeCnL4X2XaBrsZQ6ystxadgZbusqrHLDZV0nCKrQ4BihMLf%2F88AGOqUB1fQH6KNVihpG%2BfbrP4cIOTr3HiJZNbe0uZVrfTPTTEBhzlzw7VAnrUsY3K%2BOGd1KjKebsdIpLW4tNwyDsS0QfMzkMKPXhoXueSfjTfyvttKjlqQQ0hXic9%2Br1EuH8oNzwDrJc3C6%2FhEYZR6Cmdj0sOyvzZbHwMkIQegfdGc68nNSiFiHFSAuxT%2FBGicXA0EmLCSBp5YcXZk1hE5eVgqRz%2FHXiXSc&X-Amz-Signature=07a4fc42462571186d0bd2269e89d4b504cd00b1e686a1412daab7c8b44b316d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
