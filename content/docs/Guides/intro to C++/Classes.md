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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKKWD6WZ%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9rUCtxHYWOiLaUlByBhfUbSgsgfMN7EwdMd%2B%2F%2FAz2PQIhALfcIT3tXv2ZNcE9wYezpCRPs0W3uE0I%2Fy4qmIv8e7vkKv8DCFsQABoMNjM3NDIzMTgzODA1IgxxcLFyb6Y8IaYz%2BoAq3AOa0tqbw3ol%2Bf44AiVjOLkaIj9uJTs1rGW%2BMrtjMZVmL1yIfUUlcQkEHbLtyCc4%2BDCGlKvCZ5VUEj1L38sM7wqoLGkO0ZN1X4Th7GcTRawYqFAML9o6GrBGEhpvZ93Oo7oJSwUN8os6%2FFJPqvS1Rjch72OCLKh2LS1SBrb6MPy3vJBWTpoAoJd28sg8hvACy8KP%2F9uC2CNUD5QjgzGK%2BO6PIIiJvrJ3vyYSwrKGPdHjTt1p%2FuLm%2Bxmn%2BavhXQldkOv6fBajAxRx70%2BCVZugOdoibvuk6AJRL7efAA%2B40TDSH35%2F49O6bKesFNYTvcr12PneW5hwqqifp5z0nrcVwoolOeqL%2BLhXNlL7Z9OYE6viyfjFcAdAUGm3uiL0D%2BEdR6PnfX1xE1Bs%2FCkPKNkIhJalcilKgV96aQppTdWoyGz3zG3dCi7J1OkuHtSH8MJ1KWaCvhZvETeSiktU1TXho2TbYTwR1ChtLNePMW5v1X6b6J%2BvGxPjP2vw8Ad2IcbplSc5DSykDM3wq%2FvayHbesJN7hmbxbEggeNC5iT9Z73CNINHQ3hOExbdGn67shyev3Cr4VK7%2BF5dOmrvLGtZL2%2BUb4i6o1nc1Q1mFpHoXWLYopn8Gh9rZwQx34ipEijCyvKHBBjqkAXrmj04leUqfChi2DF5qvI7Q4%2FinhtqXeLMDvpPjQvaYEJUt7f6%2BMSAEacwYATkztk6xChkvk4GWWghuCMkjum72VZI1Q2ZmwvYz3PStYD%2FPLoF6Wr8Pjro8VNbb1hukrJhP%2FWDMExBZT%2FmLJjMjEd37OA5UtXQjCoRT%2FhA3DCHApCNPxuGPpkLvB6v6TQmQvB66F3WtU3idlGO%2Fuh%2B5A8SHlCp2&X-Amz-Signature=60a6c5cef2ec56ed90e60dd04a45288051a9114d8da925c06c0247188d7d8cfa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
