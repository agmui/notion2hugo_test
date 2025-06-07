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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KBOV22J%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFb6S3dc4zt0TBSb8x%2B1AaVzZCqH81EWtmqaNN8Zu2SOAiEAqQ305bG8dUfhhxx55EX34em7hnwoJk6VHbdLTb0dG7Yq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOkgqRxBputTKk23uyrcA5rLQbF1wBvUY9Zj741fBhXoxu0%2FBefCs8EseA8IaqF%2BkQldbHEkGSObSKL4Fs5hcX5itBiMd%2Bdc%2BqWvfSy6IdQmfLmLtEnGdyvE4CfH0BKZMbjPWFj0xGKEzLW1PD8CsNYn%2BsoG4zJfRU1gFJuYEyym1GXaJjl1fPlhlFfjl4TB3%2B1cHdFq3hV84J0KatS2O%2BQofNmU%2FbKL4F8%2Fdw8sYv6dMGfn2VPCHw%2BYBDSrc%2F0qhLyFPLXv3rdUJuUDZufVewdWbDxP3D0tBN2AAV8MiSpvbz9PNzq%2FDodOHFx63teQqycbvia9Z0N7ktMrkqT3s7p9vWRbQ%2Fsv2Cw2d68yD6WkD48%2FzbMSJI2VNJyXnlMbTs87sqL%2FrUCyChcXghEuvODSpfjmIfhD7wXijUIc0oY0Eri0xJfuPgo27pmLjqorH8LN5JF0Ryo64l%2BV10aRCn4NRb0Y61XAiBo6a%2BdU2At%2BMfVTkk2JfkNVfCZT4Ul7uxtgRr5LBxQGul%2F%2F3ZkLVS4oVHoG4a13Q2RCNdr%2BWNdx%2FOW6ON%2F2ihtsvtq3ZM6KGO432EaUTEtDhKUfC%2BljeE49CAN1WejEcZjmL5lBKFwRJmY%2FS6DEmUJZv0TN6h7G3JyLYwIY098TVAO7MPyIjsIGOqUBuAJuO4C5RpBr1zqXldRa%2BgNtjAZTqbf2uSK1XrLNJRmVbPK7n2HHvOU5lbmb9epbY3FVe5YUca80RQvAHhBcpyMc9sKDyTUxq7Km1MJCA94%2BTPU5j0SxLKqEnS%2FsaV%2FTb5F77r5twg5duqcyIOBn2Fu9je0uni4WDEh%2BRQyQlYIskMzmxBRMdV%2B2bSNTF9h33ZhASVBL4zzH7o31ELV6xU6mUVV0&X-Amz-Signature=d3b73f9b6be5c1d492b7c76b55830d2281e77511003d337ff052f3596baed1db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
