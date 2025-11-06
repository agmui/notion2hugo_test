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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIPU43IA%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtJQ1CFd%2ByuzNPV63pVwMReNQ2b9qv0JYMZzGrVRg2%2FAiAXJRXr2wSnuhvu9mboTY0qIlt%2Borrpedj2pfY09bur6SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtX3W41HluDgbSKWaKtwDCPnnYMSLFuVNDLYt38%2BG48HK1Lv8AaxZqBDsWNqdkigffDLhKUHdqLiFNf4er78o%2FJqnV7fXSmnQ366hT8LXDtRprt68lEBAHZ0L7G1Io%2BVRbBx4DBsTs7dQL8sj3YqC7wBD3IjH22auysUZZ6zdB9LaG6drBTGDvqQnNdM8iNlUgHk5bxWmaxALcvHUVmLJARQrLPEvdCosdmTlkI9yV1UtWjVioRO5lgej%2FgWSsmteXjDUIF%2BrDv%2FSLVSB7yE96XCX4S7fGSJOO%2BmruLpwex3XPYCNwfT2oAG55V2EjtCLWQkUlWnmNUNYdCT9Izw%2FICXKOjUomQiAaaCaa6P6APjoImtoyCq3aKIYsHvWfVqN%2FNgHL7tGT4xkZ7ve9UXCuWiqLzuje8sZ3uJfQZgTcCEu%2FXMI1AtlUdvgO1jR7bsX8qTjfHQAzJnFt3TFzoFQjh4i8p29N53wXjIO22ldjCIMkr4taqseLkh3W3xVNueIw4EqQplAPyUmj3T1feVchOzwd7qqYVlc%2BCkqQvomzaEzz8XX80xWyroQd4VuNUDKVAnR8CqefRa8wdHnL%2BzLRC5NuK1XgqCLYFR5CjuEEJ%2FnjATYkdF%2BgXjyc7O2wLwI2ANN5NUgHzCb26sw7vGvyAY6pgHrHc4oq3uFm6jXxMEDN0dAQPZIopxv1%2FFNGLZBHq0y1AM8QEuWzdKBb5%2F7WtcjpRDF5P0VNt8cTobOwXOOCgIkNnuNnnf%2FkJ%2BhBohR9LGFcJK1IoCFf%2BxkHK65DG6XyHQwEmOH4eNaIHChI8XGVRArtGFJ1%2BKniPl3fQwRY7xrescstJ2E7OljO4QkPQjOThK1oHSDa4O4YQjB18qu%2BrH%2Bng88wOmA&X-Amz-Signature=436be26808e507459bd8ae8f3cf7ea51d669bc427aa332706df6b345f360cce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
