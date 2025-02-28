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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX4JDOZS%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCQuxKmwG6oR6I3TLERBQSu%2F4JV%2FMoCfe1ZpN3EagbS6QIhAIguBD2%2FNIL9xBxmbSyMoOzRzVrIrbwB9W8AlMA7TzL6KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPHMBfCmxTQsbZ%2BiYq3APF0A20IcJRJ8TOTfG56kdzZUHyDo%2F7l46y36bcL70VDUTCdLoqAWTHT1jNVM72xjIwjWoJ9NoV6JRcmYzdDfQJUno3Gd%2BhBY7WsgiBePIR7ozH8CWw6rpQWHiDs5aQr1oVWq%2B%2Fa%2BptVEo9545%2FAd7r%2B94jzeOgrLxMfyDMInZiZIROvV4WK2J5tb3eIlfuEAt1xYwgfAqc1V9dgsw822vUJdrDThCfOAoMLpKmhL3X5Jcft92yq%2F3ZPWjVpWy%2FfBry3ncGO9H0w0V8zXROzLKKF3NI6uUtq59dyw3T31zCgz1%2Fav3vAoa%2FuPeIpizGrM0ZP61SUVL%2FABHmm9FZ4bLLIw74KxpYJBKtIMMjh5duImuOQA%2F5eFsAZVOhCiHlBa80kon3QFWGJlJlYF59yOyYg9QicVikZaNFbYMl6YVOHqkdrGfWAEfBU6PgOsCh9ZEN6nJonu6tq6tzzaXeg6fEKdBnDnyPrG3dgPSTvfocGUkgzrYFrcNJ4LuoSrkrSyDI0TeHlK%2BpwXrHS%2Fi1BqKVu2S6IO9DvQ%2FB%2BEOyPlilLfIJ%2FHmQKyZ9sl0PvZREav2Adqbl3zZYKCOf7Gt%2BQ8tWrFFqn0S2wNhgY3JOPcQIVnOW%2BDdkX2pB7oYpRTCs0Ia%2BBjqkAUTbQjtCOY%2BTTOYSd6xPVZ22pen36tjOPhF5e%2FKFDaCfSkFGfeDM2WfYIoC1Yzx%2FnesIYfNn4CsgGWn4pGI8wm513O%2BxFac%2F5yCqHPFtJmB7RvPa95SULRUKYT6rO9zwRjmS6FQML5bcjACMycRbDfnSk0sHeWsQlOKkZ4N%2BYoefH7NV2u0%2Fqa9%2FBHEW0YLy4O%2BDX2r7UVLK9CiyuYWsRMR%2BY2OW&X-Amz-Signature=864293f20894e8222bfe0840cb1fd51c571decda6f42d65b669ab083fe18f71d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
