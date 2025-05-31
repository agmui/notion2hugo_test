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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I5JP4BH%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T100758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3w4E9j9WCRej7OrNMNRB0QwSqztt1XTCVrGAPmB4EVAIhAMHztGTkrtNEyWOHv8rv%2BNvreCuyAW0qJArD7lvkS%2BHxKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIbYyu7C0PHDnhZ8Mq3APkChxmEc8tsMxXZrKlOHbGsE9TT%2B1xbfDCZ%2BFQ8A4Q8nVdOfN%2B3NYlGzGWJVKIoSYheP7oaFp2%2B43%2Bxekf2h9VwHvL9xA%2Bmv0L36p1CvqU%2B2%2BOdkObzoxm7UMkFdB5HkA4mXeRgAEQgOtFMkprH1hVPy1amlgsaWp%2BMlLtECQLJJYFAqNsPLl35PduF4ULq9Hj5wVPB7Czdzd7y7IVrZoK1VxfEU5CpiNSVvXBOiwEqufmlHuuq8Xp58t%2F6IhnnKJj2%2BxLPx3IjGpeaCrvS1JrKoCCL9eNyec4rqYblKpEKL%2By7gIq7j42NGl5JokWEwjDOt8YePrbDlr%2B22uZbuTzCJO%2F5r%2FbK8eaNxFrbVDCfRiDLMa%2BLeMl3smNuvWalyYYaBgj7sfoVbzhTwu2uJphZ5BcLDDyaUjl7CBZGQp%2FjBnuFRLj%2FrkYA4OOwCHQ51pddTsLD58kztfw7vBbw8435DsnBj2t%2BcEUlki1WyF%2B2QzQcCYzZS6nbKbr4CL%2Bw87Jut6b%2B1dw2bgiX0wumVD%2F%2FVu25UAyaU4keQ%2F9BGotrIlFCB1e4r5XaU6yvPpCzQjeC6I%2Fdt1eBMPu1IURqdjVqqgdJ9K3sPoEjtHy05jC3o8MMndHHk038tbfrzD2hOvBBjqkAUjodJ%2FkhzKF0YkJHfbq8nUrcxzD2ApQeuiA0%2BbbxN4%2FPdMtPvDFuZof3J3VmtNzJt00StToT%2BI%2FN3cyB0MQi6ciWdiN%2BPZe%2F08kQbC67ajy%2BnvVyNEt6L8o6eFENXsnBOHHSPB2iz9Y4y0fkGLjU9acRM4JVIVPnccH2w1RW0A0MB8mLjF%2FmuBhhj9X7UEaLlRQtQMhs3GqL8UUi1RTaYOrfE9T&X-Amz-Signature=0c7692f0c803fffed9cc2f6c6c0a5da6a2d9a2d307f1d4316ec1dcd367c9821c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
