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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MSBUB2K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wwMVHsMg2fh%2F%2B9T%2Fw5GWByEDmc%2B1%2BCShUuGcj5%2FDRAIgO%2B3VfDW3K9KpbVagqqhovxQsvRmwM7h2H%2FOGJyxjBPAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLLqUdXr%2Fs2s0DhmQyrcAxmL21AV72ljkfEqwHFZnZw%2FNkCwC0Xiq2OLeuFIHS%2B4ReUzZYJfNgCIMNhjGiA7m88iPKUbzAnhd3teJtb%2Bjvq7CaEu1ScYBSfIW2X%2Bvh5JQ8ZM%2BCnsmsduVGngmhFlyEXLzVr7RbIwFN1lPqjDZqBfdb4V6RFBGJYH6XbGp3uXuR0jo%2BDQyOZHQ7oUxJOPIz3AJrVhbzoudqCP%2BkZInbRiWW4ZRDfvR99V8iHnywqnmjt7mV05lNKlIJXtU2DWtSE4J%2FV10ElIIZ7PWDjsRoIGSTUznao41FwDcRy1yR83h0ZKWYaP9PgZKaB%2FiXFdVGLkSnoSgwQUkjKP5js49lWmxTBS%2FkW5pGXhOvXApLXV35pUzybvUKkYzRBnpxy%2Bp9HH9o2Cs52kncy%2BCniSRofn5rDd%2BC4NmmfIjoyQ7ZgdtIjqFe%2B%2BlGMF9w4laCJ4vK2uMCNtQvPEc1Xq7yRkSiB9pKczKRgqIbdl7gzfmJP7tqHWS%2FTWl5TsrOn3u08s2MZYs%2Ft9V3gUoxVbCFRn7pU%2F9lMgeoihLx3oMQkx0nhUiwtaglCkKM0%2FfMPc6ZvkidPGJOfl8wrcX3ji3ctas06xiS%2BZgxng42qDnJqp3PLwAHGzDyvlZQqpS8gGMNWiicMGOqUB3y9bzZAyhvb10wLpb6vzX2eQ%2BJ2sznAsqfPo5UeNYYoCzBdk2v1gFcwlGq3mHTsbCiNJkrdQSCN230K%2FzJMMLSpxJONsGiP9Qit8iUZ7D4spiZUcVeTDBEc%2FnOO7ZtHtftlhbOesQsqBWa4C%2F1KBPxs5Toa4p6GaGj9syQqIZNUBinWsQ8tGNwDAfG2heN2ixvosiz4V1EwMbm0fMGY6xRC3TN3q&X-Amz-Signature=14ae744526e4aa815bccd2283bbf1db90dac92c52914511650b77939006c6b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
