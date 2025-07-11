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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BI2IOY2%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMQanBgJkpzPhiRzydEDEqOnnYLEWlrTFZfFxIFRYf6wIgQO9bTfTPP8kfxnAhPpJFzKdkTwmichWlHVIz%2FZLYoPIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGFoQvS1dMjg15KAvSrcA594Fcf7qz2uZZ8wUqsk%2ByMpebBIabPjjCBjkL67memqV5IrYGvQWAmKt%2FkjvwOsii7gIcE4kQ6Lz%2BEXWk4Eeuvggnwx8LzMapjV3fYbUdkeN%2FJ9neVwawMSnwORAnytN9i7osguK1GiydkMBUbo5RLMEodfg%2F7YOJc8030MafK7t1UJrhS7bvsMwKz%2FKjlgZIk5M%2FUVIAWMQquaxJxxHtkDrIIEnlmY47z9Nbn8mbe6%2B5dUz6H%2FjaG5uY%2FXSIquSPtvwbfvzNZcbW61ReVhuIENdo1ATvs5v3aNlrtAN93opuXxIhjNW0%2F7utOYPwdd35OISuh6vFC9S58o5o2b5KfJTt1vBfC%2B1LTZ2PpGaY2o8UDqY%2FSA4QP33sN179%2F86Tg%2B0%2BXyQ1DJ8qNardWYgAWzRXMGjbJDiWHM4vYIi0KX8Hd2VL9N67EasMbYFh6Fq8zVO0Y9Nyj0zpSF%2FgEZnWacjbyMyufDuGr1rJt2Mn1x%2FaLEb0cXMgV1YN7wAuz9s5pjnJGjkmo0oeWkmzOyLe2eOUOXUSOmTKoY2MD814Fk4U6pGI0JAoZ7asDcUaxnVR3OcrWgfIA0VJVfPpyEFtSO%2BsvO8UVjmEYSWGhYmt2nd7%2FYBZfhblroexu6MJ7Uw8MGOqUBytYvuToEgA%2F7NrEdPxCXO%2FJ6hdFW7%2B3BOwKYQRwmu06ouLNrviou4VQP8pNMbbm2NKrbgGJg9%2FAoFzCV4zR46YGJQqyOhjALsDE2muygexJkJbpsdnIiMur3UJF55NlN6Nk25AOCJxb5B4d7J71P%2Blc%2BXphVer1f4GXqwD7Yl0lcnl7ag1r10O1WoLQx4sEquXD%2BMowzPeqX3ZXxeCN4e%2FGMaS7d&X-Amz-Signature=98b3bb92555e06efe27ba2d4cefafe042d0d16208be9cf47e08b028c4bb94374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
