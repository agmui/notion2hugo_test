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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU4VXEQ3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCIHNEsjIRB5VhCnQJVaqH5t0pToYDyCYdBwvbAZXPVJ3FAiB%2BMSO1PRu1akJFVhJRfWDezArsbpG3iVEM0QlGpen3yyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMi0LhD%2F3KZ2%2F5v1e7KtwDTt1GUWc04lRC9nqS44yLh90aoCRTsuAO6Vq8gT%2FO0ZNU3a8lOFoiAt15zCCm0W8aq%2BzevxzLNLpKPo8dhxxhVfbeo4dlgkPTaPL4QZEdpmd8%2Bydi0B7p6w7kFzlZYtsZJEhlz6GemOYvE07N5EDr1aAllpVk6aM6VsXWNdZ%2FKloN6Oe3LxsSQRXnCJz9JFHjJORNSh2GsFftMVMC0ywcrOG%2B7chwXcdL502W%2B1Gs3uWQaXaWhwnnTKNPtcEB9Lb8KIH9Anw39GyeCtP0aHWAZb5d9f27KDHrMUDhGYCG0ii%2FBJwIQGDJ3qk9Sap9%2BjXaz67yXh5qhLGtL%2FbAToD2g4cyYSHwDb7jEL5UN5kw7s73xnQYlElqYiPn175du9EqqYcvlif%2F88FD8AvM2ie1l8tAb6hd1hJJ%2FOndGejbZpydIbyBuwaKwPG%2BnvT6J9U%2BQiyn1pCG0Q%2B1Y5MWPca7Y2O67T8Tz39lLU1WaZQoW2xoSgWHd5PzuPF6mL9QjNqBRvz6%2B7ibzt92DL8J%2FCE1UesWiHyC0DxMeGE7rypV4GWJ76Ut6tgVho8ccXWMzl4pRbBm4CnZUnd6H3qofcWao0rfmO76KINF%2FqL3TFzwd8tuyMyzkqZqwW05SE4wzbzjwwY6pgH3NwkHsvc2CREVAX7ckVa%2BEuFhrbG0PYUd06P%2BeREy4LzBn8T4xKKxT85Wb9r87JRll%2FKCag82cWhaBCUpUNz5aYWbTU9Lk71EmeHJo4zj1zcSVnHIQpUxH%2BLwgMlO6pES4HCXxmOaClVVQeJo23NTDaWEuTOLKm%2BGhygnUWRrOiJP8dZXeBZuS7I30Twv4fOJBlMegP%2BpU%2BpeOgn1%2FT5MUN%2F1nrzY&X-Amz-Signature=e8346b00ca5858f2d0d508047b1c422a7af9fde895c23126909c1b027db56bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
