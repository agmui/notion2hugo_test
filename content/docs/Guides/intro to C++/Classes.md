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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5GKA6M%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T024447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgtm4t5F74Krw5BMeY%2BduggEC8gvoaMBat%2FPypWphzaAiEAwpnFFD44%2FTF6z2AVONsPdJ6YM4b%2FuoZZrxP2qQRIbfUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFktLW1Ab15Tgd5ajircAy%2F98TQuQ%2Fji%2BzxQFTmOyU5jYj1fpJ0VLB9JCX2sjA89jaw3BUiJhMhmnj4bG3acZMVdGAm8ZUvIQgfHY9f36SmAkpC5dLp1qVDMUrRMAV7YN9tv8bL4YxY%2Fq2Uoh1tOj7ydjBPWpdWcPDl%2FPzsRvMH5QpjuNueszz7%2BWZ9DiH4bGu6SefkX9CtVBENV8bXR4SrETadYIawgaitz781t22aIhL60DW9UbSS34SG5cg4r89VxWcktObNo2Si%2FPvBrPfLc1C4WuJ0RItQUIUMeB4d0Zi0q%2Fm%2B4mhpaEXFW7H4VS8poG1VkXo0eJzq9rl2c9h6hFqQVkCCvTIlB5z%2BAjGzLvpLK94xNYtY%2BrYw7%2F389Ujtqn48yh42Gat%2FksLMJdXp3wD4E0yuYotDDXL7pltJCILYbaMYCl0AIEZemx4cuIgpHqgjk8bomblBfBws3HGFsDvgwvgAQ%2FV7A5rTEEI%2FtFWgOenFqhzC1uTlMo4R6H4lEtpq0OyHOOfBLPkD%2BjvhVjUy4zvjZc6cviu1vG349x98wvpphsqS4sbNvKkLvjZN8smhbQejYEnFP3kygkfbiehenciQw0ypEsp5ccLCXTF3wqLo5QiN4b9woJWWI1xeEnT28OPG935YHMKXvmMIGOqUBpZfCBG4Er8Zdzg%2BF8FXFy9b%2B67qFB6AHaQ3DWCScuLh4exsAWHi4FJnsCBqPwPralfgz0u%2F0ygwNUzgUwXXlrgsJGTBWSVvc%2FTdUexDCQPi5yTJtGn4C0%2BPhIxX%2FBmJhIZV3CIDbUOOWl4zXiXv295t4EBx5eJZzXcP1Q3bgZLVNAaI3dT3JcEfl80IhOcACDeoOgjuqLaqDR1ufW5Lt0xUOgqlX&X-Amz-Signature=2715d2d7213eafa271f9c98267eda34c6ef7da621072bf3d20a116819a98b0cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
