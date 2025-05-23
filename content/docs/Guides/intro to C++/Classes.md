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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMJEAVQW%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQClOinKV5o6D8goDjRbTyQMu8u%2BfUs%2Bx03v6NJot9HlUAIgLR5jOsjcIgOCqHfQ4nOO22ByDQ1vDCkTmmotYx6zYS0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJefy%2FBCT6EJCPhsxCrcA9M0hyb9XLApBQHyUVy2FvtgqFc4sHXBDHpOW2dFl2etig%2F7vgvCGS4bHQ4Q%2Br%2BKIb06AfYIvQ%2FrSnC%2BcdrmjQc0fvTiRHwHWfk7gyKt0KPoFhNnyc8PTok1a28BAiRHmQ3ntmeOdcIkvtZbHJ1qxNOEDxpmntNKrjMgY%2FMatyQeUV6eZAHu%2BNblwsNq8sgE8KDxND%2F892pWLfI66tZVGmiawnBQKkS3Cemk5WHnoeUudrG9To2w552NR%2BRYj82e75w05mpIjJLJ1cSUYtkrPNSTC2zr%2FCHOX5UJYpEJ9EzuF0z%2FrMTDqfu4qx9om4ZSr8fuUfy9jRoelrJ%2FlCuGmqF5i6c9PJBRtEh%2B%2FhEpZ6%2BgzSRgTpgBroMio8mHqnij1eLcYJeIBBMRuMj6OWAMX%2Fl3i2M57WtU7QnOrvhyyfZryqeNWRQkkG2%2BOjt5bcr1zYSblgVrpYWggHdwhtodYjP%2F7TUy%2B68Ly13SpPhAUFe78j3mUhW6JNBtSZZh6a9hbrrQoJV2lKYPNdMNJtioBddQtYo%2FdWphhBm9iKawSFK1m0NhL8dUYW%2FTVwFJ3I8ti3fSX19q3ooAfrJXYJ5Y9gv5fd%2FjfmE63W6UUf3WBz4zn36LoK5BgL%2FwIZJOMIapwcEGOqUBW6khZX8KtC07JxV2c2DaOdhO92myrflPh9hY9pmUw6v0tKyfvHdieOQ8uvI0hyx0tiVjDEVQ6F8MAPYMVycEhQ0zu%2Fcrf%2Foa0tGyGWJaHu6wGHAmaCnTFJFsUrnYkD47rqE4SktWpACfd2czotzJIhzPKb8lnwx8lhl4Tdbgt2ofTPURl5Zul3eX8GdUMM8BKfWlrozcN1uDe64lWg686%2B75TGxa&X-Amz-Signature=3d789425f430bc05a0a3e6be3f63a26b7b66e8afd074aae0468d2a7fd1fdeace&X-Amz-SignedHeaders=host&x-id=GetObject)

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
