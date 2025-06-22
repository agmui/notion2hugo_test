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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7V7A5HX%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDMLi9LnuNr%2BwqTTyap8WUieZ8%2Bqt9Zbvo8U6MB%2BqPmaAIgKyV4MEV7sLpqLMc427xoeOqpP2Ednbp6Uxgdnz9ctCcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHA0YOA%2B7UkLuWfEyrcAwku7r2U7Ujx0TD%2BLrK4TDXnggowEvHWbUQDJjGx1aGUteLrFduSqxy4S8WUiisv5P%2Bn23vE%2FezjY8S0Mhz74swK%2BZXSZL5IF2lN5XIXPfaHuoXULrGQNykqZe%2B57zAihVU58WVpP0hj0dlL%2BapchI7l1Apvkqv1OZBbZfeMZ8p2gKyczLa9U3G4uqC5zmMjbHqm3uJhLEzj5aqevI%2Bjqy5%2FH81FNZbHtJdIhVcvn2cB4h0rebMDJ0AXoqj8vGARtBZwwHewQ6PRMKTKavbfO6lIuUEm2Ha1BrMIF6XRg23ouRSQLuMXzglNTvY5%2Bqa8xQqbrCFavVE6e2eZ4v69UDeY1fIcU5bqF8yezOfkWkGG7abnBz4nAMLN0CQ%2FgFqvsp5f4yOQBETIRvRkbIBeOztPXKQs0mAZEtpWVTtIy4C2QiEhguEmigP0yNpgmlINrKK23Smab7Sqoan2to06WNYiG24rRue2ux93aIHSpElRQ%2FNoCqdOBsOm5%2FPcrXneqP6B5Q%2BUcC%2F5G3D7RPhUK6qZaY6ZDazEfh4JABrzVonvuJpafcdtfKIaCGebIGXNT%2BXizUqBLNT%2Ft0nxwc%2F9QJ%2BHDsnFYpltuvOZp%2BU6rLEXGE5%2FQLAamFl2UupDMIbp4MIGOqUBVZT5ggwPuFO1TWNYno%2Fl6WRE75xTfLTiNO%2FD6sq6jn0D%2FNKc74%2BynyVOvyCr6tKmRRjaZS5IYqgDGu2%2FKo2rHuYG9QclBaymYcJu8uIMFGgSu2nLRyPic3fdxTCjmNmlhx72x0NY%2FQJw9oJwma7iCVk%2F60skHwEE5yfl6lDUBwaZfj%2FvBBB9z8%2BW5x0P0w5noPKbHgIMMFT%2BWN7FdIC6nZvQWpST&X-Amz-Signature=9479ae8b629d7ad517a691e3f9a93f902e9e51c94177cf652ad9d2bd04862737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
