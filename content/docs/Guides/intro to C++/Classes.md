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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYNJA6H7%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQCgwQPltZBovYMIgBo4gluHGKPL1Ha7T9L%2BSSDa4i0rygIgBQJGnkKQXoqWFEFiBWsyyDmuAxwGViHlmyMCKm3V5z0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ9wLhRcSSm3bXXgSyrcAyXECfk7zVNC6d3eoDunsY7ZJsgXBZAcJ5O9BiSwgbgTbU6lJFVIivZuBZpOWi80%2F3pz2juw%2B07wH0DGTU9Wk%2BP71IOG%2FGzO09B94%2BY%2BsCcKDvBbiD53XaEPgWHpWZk3gnFvZza0ExK95m4bcaZ5hzXgzkgPTPjxCTB%2BTAUiGtECqnyGI8cuKaUR6R%2FQICblfmcgtJELU6EWpixD9KCvcSJfXaA%2BOIf8xI3Vmn0wDUcGHj5pYWYXdrQPUyKPyAYpMnZUpITggVpYadLj9nzzBe3wr6C%2FvVtGHgCMF3lwvsx%2BPGAxZIoiMGmnZ2haPAi7CoTTaVb9hrGQ9qn0kZzByOLm0hPgdQtuapgQSWnQ%2BgQg2t471tbpP4LjAucM%2B0y%2FDEM3lN%2Fb6%2BWxCKJEoxoeK%2Br8rQrCEBa3ScvX5r2YizkZ%2FLeW90P%2BjcqzsGSBJ1GR5qtvuJ9niIVuwaQfnpzzSWrKDtxjbC5fepp1S6EGW%2FFXGk1%2FmlRqxH7neUk7FDEQNzy%2BQS7rTfoUVu9l2GPXdO%2B8f45GDqr5tDpisPwbLBdWwPvB3akVXtVypIUaiq574B3uslJik9EqKGQlfqm0uzsUoAOqeXJ1y6%2Btkqyt4CRDhH%2BktX0jDufgWzukMOrP5L8GOqUBfMPx2rnGXb38jS%2BNGaZO8kz%2Fx1AKPfA8L4RYoTMECYw3JtkNItH1Yi1%2FyU%2BbN4JudN90w8U8hR76YZPg%2FcNNwYuBvGhBJ%2Fn99QhA6TlcTs4d30Mp2nqMUoLxAWqodgxZ755w3QDrblqgQKo6D8zBAdi1wnWj6Qp%2FlelpbkUhUdFFbD9dSx2bb8LOx51LP763TXIG3AZzERbDc1r2Xk5gGx3BS%2Bya&X-Amz-Signature=9595a7b370f1aa656708a4dad41352bf86b335e9f72cf8e2fa4600cdcdec8369&X-Amz-SignedHeaders=host&x-id=GetObject)

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
