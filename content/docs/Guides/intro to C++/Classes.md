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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWGAWULW%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIVJL3bCOs7LKB7TFWHJe2EaJMNzOimr2v3%2B2x23sGAAiEAorBYCU%2FTuAfqQ2tBK%2BeU18bCIkS0ibNqo8JlsfUufa4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDET7PTik4iV7hB7X%2FircA9f5BOFGrN4JFD%2BPCfOKnw%2BSNVLNpbAT1UAdHFm9tIvRVy043TBgvZ5%2B9PibahecnIxdJq4wPMDjOsI8mIT4TqycvUyeigxkZqa202UxE5ckCL9bkpdpXnCth6dqGwWKKo1fqltnzfTUIuiexMDQdJM3Mr0pLV0hLlAJajVaQkzcHW9dTOSYfM3PnHyvkL%2Fts3h1KUrI60Mnv07Fa61OY87BbjQVNtz%2BCPcNKzh7tbh1NMN7x0BLamwMvtj%2Fhv8IsYKhZevuctY%2FilmjsmVpeL6QCNeG9zNA03GLACJhYASBU9qYhvB4ktxAAQMWWW1ZpVGMUgiE4Vh%2B57SJXXx7%2BQf577apjCUpZvsUtVvhpLrfTbSbRTAN2GOy9GvW4hNvppjmi%2B0axxXKxfwPJe8T71LCEeswRg9%2Fy6xfjMQdwp9l5DklkaZAt1pDC2hgtmUuJCLkCnpcTNw%2BjN9FJeWe0JZq5riRj4tg8n0YXFw0%2FljbUzCnyp0AHCQfQdClSn3D3o3%2FWyNAqLpEluDmaETzhPozXLqGD7WASen7wLjFFo%2FZRTIncxDuV1dgOwllzEVpv8y3rYMPh%2BSeClBP7i5DvOMGC7R31Vz%2B%2Ba1kDprgvA5i73ife659a3PZdnY1MKPU078GOqUB2wbQyQfIU5LZrM1GdBuvbOUyjmnfY6tHckbaMQlHLGxqMcqopEru%2FMJ1AGhG%2FWhuOz3B6bASnfZpTx%2BthPVGuFNKGZkhKGjHuC9xGJJ5Y9P1hM6D%2Bq6NcXC3BB3Tg4E2eTxcHs%2B7Y1PTjE1NPuw3BSVnsVSvmaPvJczqtgh%2B4Xg%2B4iu6KY91q8VgftRAHKPeU1F9lDXUsF%2F2FXZCUPg6Qnug69XL&X-Amz-Signature=36add1da6d93a42d1a8a3e01bd48f3a88e45a115ec4f6bb9b6fc170650fadb84&X-Amz-SignedHeaders=host&x-id=GetObject)

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
