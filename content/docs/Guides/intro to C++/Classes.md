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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2X4K34S%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T071146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCI89QZUMdDcc2HHo45NGFk9OFMcnzQc45Ssc%2BCYwWDDAIhANWfza4wdnacVn7gFaj36pP1voiLgt%2Frz1Y0Jtr0GNt3Kv8DCFMQABoMNjM3NDIzMTgzODA1Igy2e4zdIhqB6i6uTAoq3AMJ4F0fQBTQb5lQdV0W8IwmgJGeHN0cVArkYvImY1%2FnlnMcbTKuSGQkgvcFo3JEskZH2M1ect1RNaCprWKCv7%2F1avUb8GX7oaErQBj6PVXg6ZWGpJpWq3x2B5Ir5OudeKNXSvjdnSWErq7tgsYbDfg8ZUBsIyzsnbg8ckJGt5mdArJF8CAnv1MYUdtRKL5NuA6SwPZRbzrL3hXK8q6fHobxUHWN7DbZahpZhXTnL%2BV%2BhGIYPtfOwqKWI%2F2Bo9BfuBSTY3K7hbEYsrqyPzV3iRoIJNxC4yLgxXryiyMywVoPttwUkM3sM5HFjxA4DVKFBSoKx9YjL37SMYPfdyg32DmCrcsFnoJoJmSkvisQHGYEcYj5oRz3pZqqJUbN%2FZs9IyhWFmi16Fm%2BlIfsnMfPk0CXFdZ9zWYVoHDNWPgc44bLk3aw809pHlvpCTRFI9ce5lU9runc4QUY6RO7dJeUKnTBUjZZ7R1tnS3vDpFXoZtwmyd6p0mbh8DFUvXQlZCLxnU6%2Buoc2GrGEgSlE7cE96m8gslFOD%2FZrXbHhH0067TXa3l2RvSilTXS49lo9tI8%2FZuejTAibZVT7h4TNe%2BStjG%2FQE%2FFtk836xhrizfpFLGLyZjBRjMQrTGNxucr6TCp%2Fr3CBjqkAV8oeQaFGyPut9NpZmTPAuTM7dve%2BW8Y8uASw48JYcKbf%2FF4%2F9g1EMQQRkMI7iFupXdbLCyw5e3hcwZ8g4%2B0NeUjvDXPDgsSX%2Br3%2Fi9Iymrl%2FIlExowbgPa8Rnd7YxQwwzPh3sRni%2FZY8kl1UylnCjpugrFSBSILwPBPT2W1cUPZ7Ss5cWrPBPAKwgogweiyl06pkmf3POk34PJYkuSOpVVk3GAh&X-Amz-Signature=4fa0a8887126f9cffb56c8c9468b209f6880a43714ddcc448e9d2a0abdde0249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
