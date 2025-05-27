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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZHBXDZD%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T181025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPBcbeF7i7jVypje4U9Yp7x4lZIlj%2BRzlgxbCjmfGEdAIhAJPyuy1smMrl0gD9BbicyeZUlMqQ2XgHjVExSroSgMQKKv8DCGIQABoMNjM3NDIzMTgzODA1IgyGjgJggirCI9gzB30q3ANVwqdwM04JkGqrSoyFQLNUjXl360eEhVjWfrk9T6UTNn69CIv9wkGU5el%2FCYnHRBLZAvJzF2zqUirshuProrTGdcjhcTtZIriifXxzyDryBqdHEsArH7TN2nyOvMdFyHC1lYkxeUAoiisRF6D1ae%2F9UDmOn46KUu6pLFe9re5%2BoF%2FvyG8ZgxzQiLQhFXIHZbXdj0hbnk4RULmrDRuXg%2F5mF3Z5Vgo2QQZNI4dvBZCZ1cxl2TQJKMnovUio5XxdKArfdb1Fr5K7OV8K3ePFEs6k9e%2F3HE%2Bzo9vgbzr44p7PWA%2FXVOfL9MVKmIICPLJOPdGGrdBa3b%2BjxXuy747AMq%2Bl1D6MFfOFM77hlQWq837WgUT6V1pnseE04eAHMjN2FHxLkk1SNjk0Fv0TEJrFtjgDwg58gh17NPwiGTuwDCmAam4zgf5sqkf8Cp9e%2BgwaAzJteTkJ7cRjpP3sK7rlaNvmUtRTjkwXGfT3SFKhZ2hEOctpQWS1I9YV%2FQnaf2PxEF42vcrmWfcE5kCmD95f9%2BGVRZaUBxoJrGLZ24h23WA1fvOs9iDHMuGxFNztYt%2Fpilo%2F0VIJQtKTUE6Qe4XHIXVg30aoo9e9CjSLLTpsQK1Ldn%2B0on%2BxeVouk%2FLtMTCT5NfBBjqkARJRkdFS6VceBa48ea7L0DZwqUh6qzAJhfmnIiGs6BocDLonK1wXcF9ye9a8TLg%2FZ9sAqM6qaDjrDjfrb7MkC46PVrZEgXR0IsTct%2F2Ps4wVpcyCO4LRhzfC0PAb9frl7Y0f31OtiHKbdmBu5xJ7xWX9eCAIwN6GZqkkTPOSqYWZqQ60IQCqYpM%2FjyRBF1707MXLuRj3%2BoCrVgHSHOqRBZSqYeNl&X-Amz-Signature=d829f7b7a4fa40cb642796ce18987e6627a7eac19028e8777690cff0ff47cff2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
