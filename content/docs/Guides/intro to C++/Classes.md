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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5MWQJA7%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T160921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQC8Mt6fOgvnNFZDRX6mDYMkXVaRKuQ9jJf42rTGxZ7hEAIhAIOpwP6bdleBDXah5IcfguhrB8uTOoxFWjJ80O4Xb3PZKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwS%2BU5CZeNJjADX7k0q3AO%2BWiNcvBNA5NPwCYlp8nz7%2FaBpt8C3FF9ZEQbryyUfWEtHWcM2zm%2B9R16lKGWrr3BEmo1Hcek3%2F%2FmiUQ0%2FhJU2ZG03B1z9g%2B7oc7KlzRXqpd5e9l224S4Wb2nMVEgbOGroeDeAMZ9zHPaJ5HHc370Dho053f%2B0BPMNucQf3G8bidY%2BAEBo2DUrrQdvzJpcue17tTAVlNTkYJ7vVkc%2BN0%2FXht%2F6vnhTbbHwNK4s2PgyLLOyrRDCBE3Q%2FOVlHXvz0wof7rqxoiPbXoGJy5ZM0rq61ddiTEqat5t3AGaQyOraJW4zDQO96IUTlqq0TLFdkGq3VmeFIxzppv%2BOjaXk2ZH%2BXYk6LGysJnbIlPPRfMONR%2BUjyNWTkpgXX3Z81vqmGmER0adKHms1EBlpNYVNztgBSKKezxiPnV2lUxIq00RIXfOmJn9z%2BQtnZseVC0QqZ4RNUA6CTsEKrmVq%2F%2FLNMI3m9H8jxcvrCGrg0Ap3Pj6oVHH8ZCxrFLFiWvSpvXenRtfQIhMF1GZY71SXdSKjcwQPJAhuMhOL6dhclBNxKf4G7cOlwOh8ycSeu1hZxMlsup2jkEIJPt3Z%2FkN1eaSvYV9O2YWgq7rnGJnR7BUpUC8E%2Fmc1vuOgil7YE%2FvKtjCunPa%2BBjqkAZ9crHybkpW4n%2F4cVSPkUFPBynkQXh%2BtyQay0F8UiyKQVZWPJj5wEDPaqBrxB%2F9OnsQHQAmCu0cDOjT%2BV4clQfVECT%2BxG4lJRamjmd7comfN9IQVu4mejLUDHo%2FzvylQy6veW4CURL3pr8ZOic97o6VK2%2BCQR3%2Fyk7YEkuuwFJ51MuFwrzn%2B47xpJvZycW57rKHNpe0zAE8249q4%2FYTfg1M5LaTf&X-Amz-Signature=acc06743d3c712814b8ad1ae604ad0319e32ee22d0a826ebea8eea3a2d7c6afd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
