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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH33R3P6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9D6A%2BnWreMS8b6A3k10%2FWYXchGX48X%2FONZ8WwUMYlkgIhAKXQtIF217XkxiMTUwGnmyeT3each0w98mYO2RZtWv3FKv8DCBAQABoMNjM3NDIzMTgzODA1IgzBKVZN%2F1p8yP8Ma9Yq3ANZJVU33%2Bofn1B1l6%2F%2B4yW7fUIT8GZcHJ1ZAVvrrTFHhfEgOjF7heU%2BuEsGYnvO8kmIkKazqESE4O9Z9pavudaKoI%2BlZtsQ05JyZpKj5NjieohnER41DIWaCPylAqZ1EBcA7peT%2BLulCHyNSY65bbzcfhuCT86kSxKPXMO2sWkOpuHStrJUqT4CrT3CmQc%2BIpVIiP3mjmnqObBUAYAHropVEGnfzfyTPAWrKjlRrXSl8V0J865%2BExnejZh6A8UemJdgJDHVpS8J6U%2BO2En1rqfUv6MQUTniXiRt2Gq5oy5yXZBam0M9%2BgRD4Zhfo3oK0U9FTYdJIJXuOYREb5GzhikTqMP4gnWeg0Uyn0IdZHfA2JdFIt2uLLe%2Fs4Pniu2VvPKD%2F%2BQt0Iiuvbey4iEr7aey3p2hv8ZrFagMgc1rw1N9t1rYGfVv6qZ3djKbjCiEr%2BkuptAazBW3PohhW8WPctOsn1Ivl0KF3iRP3cuahQXQg%2Bw0wxwMRyyn3ZAyxiWXaTwYsK1d1W3MDJ%2FM9uc59JAjm2cKtZsZT1%2BJpU4opety8A76wYo8qIaJm6zoxUPBzE9w9UtIsT07c38EmDdTyflUZKeBwu5oCBQ6FvhzgCIapdnHuZ9rlW04XPscnTDRpM3DBjqkAaUv5H8rMVFxb2tnOlMp%2Ff8VF%2Bnngx%2FhwWzhd40lQuTyOyVCWQ4n3Z2i3%2FLw55oJABZ3tAG0zim6ZFGfJwKdWLp38ajlO%2FTr17qR%2FfNvVpouVKHxXmcAlD%2BwrviC1l1i%2FXSQ%2FbfGq6IwMqeppns%2BR%2FFFR8s94QQ5apXj3k%2F%2BxxiOuGg%2FSyr%2B%2BiT6YUPghGziEYlJS%2BROsV8utvpPOo9HWJ3R7ruH&X-Amz-Signature=5da426ccaaa75aa09db4268e38af5541386b8b3407154e62963ebaadb9139894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
