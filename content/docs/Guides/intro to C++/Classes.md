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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IBPUJHV%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T160927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtsUyukf%2FYpQKiqHZP5o0KCXakfb2jjNUsWxvcuqZ6kAIgJIazlILUOmgnetKLul%2B01QgqtHyoL1nYs2e76W92u9Yq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJSLWFjwCkWvm6SDdircAyKx5BhHMaWQyFz%2BBYq7GmIVeVqZVvwUj5ofXfS%2BMjbnQdqp4idLiWp1cOCYGwIxoOk4smfaah1enOUd%2BqkgZ2aPhT8jLenNnZxlX%2FALS6kv56PhdpPYXv1eGCd3gQ%2FZiN1xtve62mBi5IL6nmeS%2FP6w%2FRz%2FO1HeP0Khq3WWcFfKs7YnI35kiN0n5fKcv0sntpy3upWT3TJGu8W5RMOiDLB7jmvJT9S3gW6J8FxCOH8oo4E%2BaGEzzNUYJmI6F8UiJiyc32XkZ28iwadgHloVd47kzEsyKKgbr38mxIpsu75krVaB9PCq2A8QgdLhsXFIb0vKTDk2XHwPrdj6bmouZ8GCLIsdc%2BixkO8sLMRALm38eATnFJyA0Q9fqNwrPwLxqvjsk2jR391M7bPDPZQatKbGehnonD%2F1pN0OsiPKP%2FYQDsZmH%2F%2Ba9AlJTXHvGfmGEQ6g2P0kW%2FGnJ9qksZ%2FzsDwabQ6Ux7pnGV3FdZjGgdRt5Gvl1jvc7mMD%2FDxjkTyXl0177wQQ7upIP7ZeEQ6DcjsAVwfRCXpsp4JxkxMShJJ5I%2Fb%2FLhejYlpz5h%2Fk5tgcWs3%2BVlkkWK9fJUCJHTs%2BRCepfRoYJGAJjMkolz1wILzC4InD79nPoeG%2FR8YpMPbeicAGOqUBQ8d7EcU6qXtNJFowBnuV4nuoulaBTcDXEzh3b45pZWfE9vGNiK8eFvGzqr93IWDbjc1wnl8tG4ldntHwwZqu1EgDF5GwJjNvBwjy5UL0JQRVId7JxNog471ftu6pNp8rpT5f9B1S6K869Yku2Y5nYRXiZk4%2FtF1e315y1qbOiyKBo2a9H3CfbAZg96DT%2F2LHk7QD8ZohOpTdZ6Se1c17FJlhra1M&X-Amz-Signature=af8e288f8f1408dc4da3c174b7196eb4cef20ff7b635f58dd173d18d42d4a2fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
