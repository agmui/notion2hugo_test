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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7QMWD5%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T090815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCFF59OBUXfVFZvDBQWCgmqZtiy%2BiUpXghMXF43XspE%2FQIhAO6BH7cUtyUfdj5kkUFmjlLYzduQRn27eMs2mXBlUCPtKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXbaXHXieXdFldZQ4q3AOoXmSwPRG2Ht9Y5Z1AMguBrObMuEWwzYHgq0j6Cj5jE6hvHnO6DAGmuRwNDdRvc3n7LNHhJKvoZvooXJinjkxLDyh4WJcqLjzMYxNUWnrF7w2TIXR%2B7oJWfwZaksHIdkqEg8GFhk0F1%2FceYqc8RkTfM7NnZOtUsilyeySkLiuROoDbletLljThQnDIE%2F%2FwsC3m4w5tOjNkYRw%2B%2Bq%2FdpMgTJdS17QTDURX8sdrqBDCMI4mb7awYFN8K%2FXNmLSi9CNNLSgxibVGfkKKQkK2WPSaEX%2Bt3FcDjlAHTcWxH%2FNUMq7ee6jyZg8bKe1iIqNfKKz7yMRhLyXz%2B%2F9yZrLAbGwVseVvLIjBplal%2FuBaFiF8DQ40h9gt9aVYh5i5Auuzm1%2FuyEWX%2FTEMUgPorsjbH7h9saU68Ak24MxEA6VLsaIqFH2b2dlyTrbqQpm%2BfLQkOIyX9jMLdGAXgyYBYYoYL8FgMTvayrQ64KsKggIWHbjEi9LxoKzgvm%2B4dUhADuk6V4%2FlOIFYS4etmxA4RETI7sJrs8x6H7qYGiFdV3A5Ux%2FzuApyQo1Cmjr9Y1qLO6YE6kWhBaWygT%2BIUQI0haWK7IBXzoWvsV24XobKjywTNoqw5oQ5XD9bEZlwR%2BsTnNTDru%2B%2FBBjqkAaA9hbuo5WllIdypnPUAxjfXe%2FS59hdbtqIFn6h5mGCtr9Nq%2FMw9XnsfOBS6V3uayI2Ct8lnlhTkhQVWDHAnnkWQjKu%2FeZt3JT7RXOddgTM6izUtFNmIyCVBgHcWYTewH8yLpYdZfiK2HApc22oU1%2FsAqqOSX%2BxkS0S8luVFR8STrj7HWXrEnVP7P6yHrgnLzu60rcjULzaAjFf%2BozD1Kcj7F0VE&X-Amz-Signature=2ae232b96a664103a2f74f2e3c7e0a9207405f92da8cbc1ad562cd325a2ab470&X-Amz-SignedHeaders=host&x-id=GetObject)

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
