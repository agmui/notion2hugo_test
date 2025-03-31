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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EJGLNK%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIE7UehabMwReFMaVEkjpltJM2YChK49HERdP8SYvlhDTAiAQ008ezuqCCoJ%2BdgN%2BBM5bRsIIOfE9v9eiAe5Fma8ghCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4B37Rl4GIqIvY2GLKtwDFUkfuDkGMtMfsMnxHbWJCq0O2wL1XU5T9clqkoKYTB8B0EcwqYdGcqyIsIk0HGciNcLuAcRcLSryRU5j95LJz%2BIwajolCltAR4ibqifwOKEIj4UTREQV1PJ4CJPycfTTcmRz%2BkPtFjFSewMd%2BlKAELu1M8tjT4wfq8Ngc4PMokqpbd821NXGuqD5fXClFxW49XtsT6Fb2EEduN3iVoe8y6LrLgUMb300WjJHzv6GB2vXstxaqCN%2B5irHVNp%2BKUUdIryUEQ4jvQmZGKU2TZpNm%2BDMYn%2BARYOuVDitel6dq8eaNVTeArsX5LWEkWN0I%2BTJ8oMKYtXBPZjHgFIWv7Y%2FopTMV67b8UUdEgmi%2Bl3bwySMunGBb7wclVV5%2BtHfuWPBLudlv6zsy35boRrcb9aVIAyw%2Fy%2BvhNe167fUMTee%2F56VGYX%2BLu4o8RdpNIneMuD4DZPQz2afYjN54M3f1eJ2q9k0zGY0F9Hh3WN1KsBZf7KJxuLJ2NnCeHcCYCYv8smFZq7BavH%2FP1KanYUiJ4eFT2sGdPRNg2WL4iidYvMypLlxNFw8f7n7zuin%2FSapq0wpxn4vRZRW%2F%2Bk7HvPQXa%2BvLJ5zASqipHNLR%2FKawLRhwWn88KNOzJCvypmTH4QwmOWovwY6pgFs%2Bd8mNK4L4F8Hn7nVbSD8P1s8%2BzNO71sHKg%2F3t7Xq%2FAf%2FHxVXHOLbOEiA3LDXjoOefqehiwZKfESdi9sKI7%2F8MAJk6QS8q68AbOos9VtUmefBKgBEXl%2BniqumxQ6sd%2FDeBHNQFtfeWA%2Fe5U4J2hvwB8GPUmqJ4QGYQg%2Fv%2FcUeSgjd8oTqKcPsIUgt%2FDiLmoit5sRYJ45ZRrvFGS8WsH86sirHqGLx&X-Amz-Signature=92cf05ba8c60657674aa50c674963efb31416b25acf018e001d2e094a8a8f248&X-Amz-SignedHeaders=host&x-id=GetObject)

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
