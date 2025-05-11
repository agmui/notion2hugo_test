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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WTNVA2K%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDLVj8L7QECBi4iKtBnDUBP8vQ687%2BBQSdF7nlKxdWY1QIhAK0T9tuOm01f6FyXQwHScYN5bgoL5kvgkZQqJhfFwG%2FeKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzU%2BVUl50BxSWUV6ygq3AMwgBQ3TY9z6FCUkQnWFLxUcoXBujj1rEfydocqLmdzi79DLdOWtLEC65LgjcUdObVJARu1a%2BEBQSjoIg0e%2Fm%2BqJal1wrRn8mG97d5ST9fnXLSQt94AsBqlbaAgsCZkhDL08%2Bbv%2FJcbU5sTGRKyxDwJ75DkNv3F3RAIPYE5iOhupHtOyRYxXDzZyfG6hmSqivaJ7%2FjkFMo%2FhUoYoQr9zao9aF7vPjj7dpkwlA2wEcVw6F5lKJBD16AuPH4w7Pu7lODUeub3b7Har9bvKcoWy5L6n7t8tUh9%2BQy9CuyBIXDoz6ZUIOuj4OV0jRjDMYQ4MvFaORKDsAwlgV4PH%2B4wyOh7vDZIgJnTfUpWyMbRGlBBQ9kWc8kU3DxQp0uHUdPCvDtMq4EZMvcq8nlFS67L0ilkZh2FMQ7zmqRrj6aW%2FM%2FMsg5CanQF6Y5YFi%2Fg0cicYgLIxY0atLLHcwASVwfJe2%2B1t598Erh10qhzXedHadcB1wYYXr6R6B6KEmpitXiNbqqJBux2WlMRn6BYvrLq2suMU6svk3LZuJJh8CgTRRy6A%2ByOp6WaZVKpT3HV3jSnDuDC%2BWCxeefP5PuRCfifjuAuGn6%2FC%2B3E86GkTEZVLDxZlh7VamzFKD81f5pTtzCboYPBBjqkAdfl6yZLf5xW1HDKUNviaB3R6FcaQQcMHFefsiLE4YSqDD33SPs59aFxMXJMyeMwSBqKxmkGFQb5w6ByvsvE8bBE2mfIaRBlQHM5%2BNJYU75RlOy2jbV%2BXcm0PnGvkOEtjPjVYnNi1ANRVhUPiB4UFgMnHQfTZ%2BGZERnXYMUw%2BJpysAEYYh2mUYDrtrNhR7VVMwkiEBnThCHf%2FLUfes3SUaMDZFBn&X-Amz-Signature=2a14c3bec92f9c70d418da8227d75c037db3dec642d03987fadc892b47f1497b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
