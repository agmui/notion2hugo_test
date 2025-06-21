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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RB53UHM%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T170527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbeiXDi%2BQjj%2FfxJ2EngGm55yvqeGSAicjCDgrJHadCmQIhAOK2WkFAllQO9FvZATk%2BLB5x9dD80RQv8IhbwFCFcHc5KogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwpY3Wv9EkMMHvXh7Mq3ANtpSlJyoj5ENCF3zjwl9ptwWMliMviwhyshSKsKY%2F2k%2Bsy%2FK0o3lxpUOtKqUYV4w0DLXedKqgHO4h6mLsFAXPJ1Xyo4CPYqQ9MKzt66kPHnC0CAPGcwdUBRyDHzlXQ3sFUWqDfud4nB8HlmooDFO9cdvD8obV%2Bv%2B%2BaGvrcbip%2FBhOY4HhjOlxifeKK7bXF7eCKZKIVbuZX1Y18WlDskMPLcbbNylC4QXm2e%2FCdoW8PrdxasdQVTHm%2Fq10BmR0eHns1hv2jATZ6%2BO8G%2BCHc6r13b3sLAQRSiKdlhmqYqy%2Bm27cAPLYFT%2FQIoAKkydCv6ZTuLrcvHlIiKmREZLiAito1zowsQ%2BBRn0tzYFjeBAuotydOSOC6Wy3oleJG%2FHeJzo3IAFxJdZFOaIt1PdsTgcsMjmQ940n7g6Yizo2%2F3xHdsoYHDt6fMUyfHSLpawiO1aW3IKtkpSuCoS4kcGLkjzbCtS3wOvTrZKNLZGIk8MSQy90TSVLbDlj8qvxlXwPBvQkwtbU%2BysPH8XdvA14ZC6g0FQbmiXrblLjQhCIiaNx8nRhtAfr7iuhIvDnnmAZUDIVRredqK3ChwrEF%2Bsev6uJwXnULzvGYM%2BVSaOdSscGd%2Fm7kMSOhmIpeCUXkgzDEj9vCBjqkAd8mcjbhXcxaJHpJUHLn2W1dSHcinE5fbabhL1ZI%2BGCzxTrIYl7f45MCnZ6EvGPJqLlJgNRlkLcaPKG7bZVwgG9iTTmEyOZmsaXgD5ggt9mxs9%2FQfVx57MwXyYYXLk0yO%2FYRVnC8VbUBf9Z%2F%2BS9OpxI2O1qfYZ6T1Vym%2FdNQBOtnzs98f%2FdtnPN3WEvlPiTyVld9x7GWnfJFQPoGTggJ%2Bb52lECH&X-Amz-Signature=2e10e705907f3b8b73e3061391efaaab359ca2dbb6a0177f317c1f2b21668ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
