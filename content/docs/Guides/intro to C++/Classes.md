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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF4ZC6TG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRQQCh9m34EZDEwW056YZrUkfQNvJKt6CgD99meaSBvAIgVPi5EVxZQLaMtkrD2Ny676%2FPc%2BbWNTsUxX9sJzzlXPMq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDI0w%2BhXlELrxTY6wWircA4dO7vwTr1jkUWb0hJi8VSLHeWO2JftrdyYl8KgbXQwLHfcKjDTmCoyzLrhgrZV%2Fc9HyUsud1sUdV8cR9c5Nrs0LhuKjUK92uD8hrypa%2BOYeiJX8FDnO%2F7Ok%2BpnYn21ca92VkTNzxw%2FYEf%2FVfT2Y8KruIcahnU5jeQ654j%2BrDCETEvefStgnQt4Tt1FZCGT8ps1p42oamtqX3ctjmDi8zHrk%2BJntyaIwKADtaBfot1m9UBxLf4%2Ft0yyxAdiCkNC7sBpRvGpWmkxTWm%2F9H3NMfwxNEIHplvQoqbMFBmmirm6ps942vuuXsatnB5HXEyr3ergzQkwLmKNq%2FdecSmwsQti8PElqg1m%2FT09vy25JUGo4n5OJ8WaidQ%2F%2FF913WBt5uqieIMrnO5zNZKrJD8fAHdCm8WZpIzJO01gLfKZ5cbv195wI3cuetaIvWl14ZzhxVaKh%2ByzwOXdEgUhYFikx8RllVSlOm7NPiu52I5p0L1DNDwSVp0aXu%2FhwMM3kg%2Bnlt9bZaNoqfrBfso7DbqVWWuEWSM%2FsZnEzX13IyoDr3%2ByDVxPZc9ZbZEJ3OtpkQoLdKfF%2FYwR0yhrZ9Pklw%2FVqCeNAQEV%2B89Ee%2FE%2BWlG8CF9vb4Ui5PayYc8DSk4FDMNGJqsAGOqUBvozfTSaNI2ik7c1xqkBDgelx60E9UPc%2FzwpAVaXXNZ%2BQxT8%2Ft%2BB9l0zAdaRIVR6Dk36Lf%2BqsLwQy%2B8hISULlVaa318dx7UjYevw8MYT6oT%2FhaIBR4jNbXQHKkMrfOe9w09kliVGQwN4n8ts02%2Bm%2BrHxqvA4q2vSnOtydYBPUcBaWy%2F4STt9d7u%2Fj2y5B1fOv0wrGBsnJ1qUog9faH8lftaodB7RA&X-Amz-Signature=14adbd9161a5795a84b4e09816d9bea6ce6b0f7e41b3e014f3bcf16395026ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
