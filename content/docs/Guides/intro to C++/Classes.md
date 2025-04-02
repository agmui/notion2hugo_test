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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URF4XJPM%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T230754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIGt3PKEgyKW671XItIRWJId64DEIoZhQ0EY9Fzrrrk1CAiAMcyG3tbEqTojmmUQP0%2F7wXqpL0d8jhAePhUSl4rTozSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvU2xlB6cXY1CuHbHKtwDxKCQw24jVee6PBjbAiOo94s%2B%2BVA4w3bv81x877mZLTm%2FUM9iXYZkq%2FeHd0SdfH844en67YnFeVIAQqjp6bfj0m2jcio0QgA20LypsK3ebqOc6jL6Uu2w6D9aTcTd1LWFRIeuFxVArmv8RJk3fc7pF3sZL52OE61eM7cvQNeeuTJm0a0z6Cht5GCpS4GrQofxLgj5hCFEStEdgF%2BHXwHpyDFQOz1PKe7E2dod6Iddj27hiWau1VHgv7JHSasyV5PMPb%2FZcK6uiaHIBEfpLJAGnMUNzi9fNAZ6s7znNF6WyUDaHTi%2FIZvO1HWLLwBqrFRVtaHb2Kh65xit6LYegNzn7r%2BVvKIKUrlF939Qn5iT68OjQ8Om%2BZIm6gtmWoEgGES%2BeMIXtetoyU8%2BASn9pUdVDFTjqdgwTEQL032KQFizx5M%2FvdnbRYQXkthwEsEaQe1z%2BFODFiJbbhQV23hIh6A6TY3FlrHBXMVK7HiAIUOnpzGDrb5D3%2BKhA1NS5wo%2F%2BwE06%2BcJdfyI3SL9PI3%2BEN68%2Bh6NNNFeE0A3olrEeInsi8hetWrzOhjYn0fgD3hmloH1NuGmSnO5ZhV86OJu%2BcyO8glkgMg3AJ8ZSjPy8oPHjK7teYgLSsUMj6uN4fww4PK2vwY6pgFW1HbbXBgyftv2rStSrWOPn6JQRJvXLARmFjT75mUkY11MqozIo9gw5OkXcXF%2FQVxERFVpcO%2BTxi6jB727ReCkHgNNaYKskngRuKuH8Kc8iJPXaSJIBTix%2B46CSY3LV%2BM0YcFKGdW2NTqf5OGD3lU5%2Fgzdmp7%2Bzko6Py37vWHHBAi9l55TizJLBgInN04exnYbLLY0Bj%2BwpVDB0y12mWbh16k6YutM&X-Amz-Signature=f48cdd64cbf29a0545591d325f03b71162e45726cb68b1418a77f44876dc1668&X-Amz-SignedHeaders=host&x-id=GetObject)

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
