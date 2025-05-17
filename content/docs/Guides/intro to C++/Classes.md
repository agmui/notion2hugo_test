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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CXXMIUI%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T033144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLBFclg0wB9KD2yDbJALkY%2FA9WpTWXD1iTGAza5uqXgwIhALkMrErOAzJr0T2IjR0tqYEhFWylj%2F0p06ktIiqxF4oAKv8DCFQQABoMNjM3NDIzMTgzODA1Igx23xIX09FpHJ4hTtMq3AP42QNN55L8pnGX4rTJVk4cxAycHl1cfCrhQVNDu%2B34m%2B4sY2GX6R3nmpho%2FkUZhEQfKsgeuK9pILgra0uwCeyhb8jNjfFIxaO9%2B60KsvrCiJzse5aH0UEGW5sHVLTKjrzfMGfMb3Qq8SXXMkqo%2FlWEL4BHE27YRXmZoLFnel%2B1A9CWlpbb8kCrsU7q2ec%2B2gRyuA8gdbvUypz0VuDC8p0aRHFFWHZE%2FLLNkS%2ByaUeRSp5fXXYWM99%2FhyTCdIEZNUw%2BJMcQQr4gxf9PP5L6ufg5C2QfPT7lpFibkTyWxoqSNIeQ83nyPwoW%2B9CoXW%2FooG1A0Qc9%2FI2rCAQJA18j5oaHRKBM%2FGYT%2BmE%2BsVEwWvECt7JA6I1Y8zftsn7Rrb2YnmPJ05tWVunuvHsLzLqW9lJdlKXnzNVe9cgALoqybJb34XbXR%2BeOGlhhsvJR4Y7IvVMYZ%2FMLrSAsa8Z5GurINTQm8CODr3RvMDxmblBKZeS3XSm2Ey%2Bo91aYp2NgPg1G1A7GS3CaoqCNV91owROZnLEC4fAU2ZIu2XVbkx5voLwDfoAxdOFpdNo4L7QzMJ4Y4IvCI6696pEOXmvxY76BthBqEdx9Lbqu64zx82PjRNY7e%2B2wnknVXWWpMWpK5TD295%2FBBjqkAQaD1RgACd6v8Lgqwnj3DmPBJgq%2FTlWzcM2idjrwx4Xa92MxNKvrhKvacHg0uZu56NQyKQSJ8oSdbDlOX4VNvL6IlZRzjiNs6scKafgRp3eKvGVy0RYuHa%2F3e1samkU9jGMzcBs6JX2QMLOSLn13iA6NkQDKxe5KoKUchoMjSA7ysZzHsAT6zhNwGE7X%2Bjay6Z3HRT67zG3MRglKa7uU0cS9f%2F94&X-Amz-Signature=7585dbd70f4abb49c76d7ef362414d5bc18db815a8a866258a151c183e3be53e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
