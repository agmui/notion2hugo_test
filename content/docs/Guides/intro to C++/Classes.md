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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VY6YUBI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDJNlNQBe6eHy0SOBiBn3wn91StW36OuXwa9eAhllFvnQIgah%2FY7yfpEbyoWeHSl3u0syjtqWZAjQHZHLFjp0%2BvpQYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2Fsl85OMj1Qdp57AircA%2FiwYmIyU2SddVNoJc9Fh1%2FLp9xsgGhGSZer8FNIafinDz%2Fo7aZIQZmriP8TzoxcpeVOopRpZGFkDQCNpDz4uNFe4CZRXhkeNmrHet4uWrS9aDzR6e9oG5EnzFP80r6mW%2BUMTrrqSRjOG5DzrCylZsSH%2B2mzWwBqmT%2F66rH1LcKnxtnJsP2kczMz45M%2By5XxTPcKXw%2B%2FJp8be6aguSOUHnTWZu4%2FDoaaxd%2B7zGcnT3bNzKS%2BgQviB086NXDhGbkaIRfHIDOz5ntyJHHi0jlHjpItTzi8PIcYf821RfORa66%2BfrIlCu3Jlqx11wWhEyshjqUm%2F8AvjIeNB8cZ%2BtDE0v%2FccQWcVZSUZFwBfxY0dr5HU5UV1n6Q28ruFoJsVMxZj9sVJiny4k4AuB%2FdGy6U7egbbg6yc2u2bWiWDZFzfcHSm5jb68OkqA0AMGZAodT2L%2BeNR%2F6Ya9uYAOlzKdhjEcuNVszZv36nqlN8Ys9VFVuNIbAQGqMVi8CYt%2FKDD5GU41XOyKcfVkpLQfnZ3ar%2BkN4JKtxyavAoJH66FR%2ByuL3xDvu4kIo4TtwYqZocsi3SzBX6XbfFkkCkT%2BEggrbVxKvolu9XV0zENvje0ZPpZm5Nt0yz8y9aLX7oDFhqMKf82L8GOqUBkpMij%2BtbmHNrh6xKJNMPM58S6s2y8kMQZhJNAeMs6aKLEGF9ykJ%2F0t3KqnXYrXXA%2F8I79u0vUxj8fKD051Jz8yr2Sl6BI7rDEh6CsAwwLw5S%2BJpKyo8fIQp7yQGx6svh%2BzaOeK63a62k30b531DRMKLYhGLlBUf3Rk8qC3ZCe2dxBIi0%2BmwdK2Qa67YzbOhq7707JEfwRB38dtaiLdQlfwVa%2Bcz9&X-Amz-Signature=97c929f13d5fe4ff5e3f417dde4cdafc2c8624cdb6d44bcdb2c462e365af9985&X-Amz-SignedHeaders=host&x-id=GetObject)

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
