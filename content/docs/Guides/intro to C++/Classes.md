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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466376RDTCA%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T062047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpHrsJvVLAWokc2o5G50V%2BNvfUwao7e55Ubykn8USoOQIhALyEuhcS2i082%2FgfWoB2vsENTQmB8eMJh2nT%2B1yf6ihZKv8DCG4QABoMNjM3NDIzMTgzODA1IgyGfP2f%2FRKpYm0NKLkq3AOAYCk44VvqtOV5ZyFtZho8QoOFodee9C0204eUiVzLMhf2vlkNrZpbtT%2FzBc3a9U8xFAtL9fFa9vLV5OYcOzQfNHXq8i%2FVqSzzAcC6R8yFALxu87CaxRZTz9zQerIURU1bWpO6bKVuJjibk6jNHDgueuZIhC%2BBPC4ey0ksvX5arYmZC3zJRuHqS9%2F9FWevpeyXIWXsvYSq72vj08rN%2BTqlW073SQF0TV3zSKsKHcdWeOxJjoG1To7A6zdJJV7ThBYQedD9TuPcr5zA68H2duv2mKHZ%2FhyAhvUZNPyv%2BPfsLgAzDEe5xTjRhHL%2BmtH%2FukDYDTGpfH%2FpqRFz0uc0IL2fEv6Ks4zXBL4Dlj5F%2BV%2FhskWTemlqWy1RulYT42V8cXcOAmAhwgKiG8Yta0Xy3jYhx%2BvSbAQmOdz4lYaB5OsMt8wyTRblEHRYY6PrYV9zoyEKDsrDUPei4iBzYWitCfbE1ECMlC0Y7NRR09o2s2UYUjUN3ekV%2FFUdUhnA%2FQtH0cuO9ZCo0jPZN8nKiM3HUdu2g7aOuVZj8%2B8tfZ83Y4tYrUYsdneT3%2F4mA9ryhAynI0yRR%2Ftl5oUMllWswxP7Q3btkoqRGipiPvBXLNNlguznJvBOmHviudfKAHhNVDDTlLzABjqkAfsnWwYH8tuRXEVGZ%2FD6rp5pdYSwckVgA4QIgt5MaMGizhdSfHjfSDIhTzrV8ALSB3thUC0HyNRoSyw0XVUaJ5S7l6J4VvQNE6dyXqeplmohiFmoxVGOy2uBacFZcvYMQwC7YQHzwC%2BRp%2Fb1lkkTmagybEWm6p2PgwH3OfHaEr8rzC7f3mXrImZdHy8oI1dOupkd6VK5ZIkf%2FQONlXWc4n4NG3G9&X-Amz-Signature=8cb755ea2f1d7014b32ad1c9e33e998d43f221ec5018719d0f4a36deea20de9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
