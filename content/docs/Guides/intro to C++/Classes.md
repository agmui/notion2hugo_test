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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AK5764T%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdPdrGvXORsAr5JRU4%2FFqXsDas3YeAfeFTjeofnWCDiQIhAICtwaJhzHeM%2FnsqFeUHRFrKU7%2BS695g6qiX0U%2F8K2O2KogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4qX8MievglJlmhzkq3ANP7jo0fixPskiGbTlfIakp%2FZ%2FJ24HMqEisRQJt%2BeCeUa%2Bi4J3DyZ51fvByjwvImHbHxnxP9XP919j3dgzqJKjrm1R%2F1BwsDi22DqUe6Ljqv5QApQ54FHaDhpVgZI2I4%2B2Aa6J6VvE%2FiD7SzBUHKCKOq5YVRALBt40vU%2BUoOClArH%2FRMEfNcEJ4APzT%2F3ODXzIt9Ei%2FI8ONC7U6PnvTQ6cukdnEHNIAo52Q6V2H%2Fj2mIprCE4ZIr2yYwW8zWxBJMQgp56cjPoYYCeOeQnjOXWf4EEgVFFqltFpNRYZ%2FjNsrSmh2AwwHtspzEjgSJdXEAIjSMLbUh2MvrddsOli9OIEF%2B%2F6zqKH%2BcNuBegYDekxYhfmySqUoMYmdM6KkHxek0O630mwNEs7%2BpbZkbff%2FkShQZ%2FChL6izKjD2BTG0WibtTKfSSo8GuObbMwseE2pTb5sqc8t758onKxzMfMsvCWyNcvElIlJd1tLntFyeTKovdl6cb8L0NItYvp4tiCP9YnULa%2B3rxsFW0OMiq5lbBfB3faKuneTLLT5sHMjvQqTOzAk7UVmSdpW%2BfFMmYNuiVEozDwf0SkpVdOrh13iLREY5OCgg6S2KZ4kKq1LxqKiHXuGJCpVZyfDFtio14TCHxbS9BjqkAfuaELug%2Fz7MawHD2Ml%2F1QFEnLFaFzylARTM0rSQ3wOqZQ3X2dQsRQzS%2F2tJV8ptvT%2BFRHULUEtcFOedMb8PClsVKCwBsKhPCpm3vdBYVNTXrd3wm8owwccZQKtOLLep0V7dRUSNOavs4BCbz%2FtfOtPUkpIpwpzyZQBSplQ81B5fylVk5Id%2FFLbdn5n2MUQtcIqLkOLRoxL1tcaZSVz4qRPTa0Gh&X-Amz-Signature=a389888268c3ebb0780439d46d5384c14a1692e2aadbca427b13e7140cdf3ace&X-Amz-SignedHeaders=host&x-id=GetObject)

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
