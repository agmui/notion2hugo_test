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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAC4OQ6M%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T161044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQ%2Fat%2BR32TrQ%2BfSLEDuCUbkzE01v3wvfRxw3YSyCF%2B8QIhALulIfSTZR2CFgHH4zrYhwlZKFJlPtqVHNIsDEWidhceKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC8fCYghUy6kZQYDUq3AP%2BNiYlMN2%2FL9nlJN2ksVWoouxQFqsUNvcap6vyVvzLfL8%2FoluSzJSrPeHsPvP3cRUMv%2FOZoXIdO%2FsXFDa59ahNeAegL00dvEK%2FLV4x2FHnb5DX79xfoHgy%2B7jL9fDsnoQ%2BYYdEU45i4rTPqvNjep9uxrzDlB2yH03af5CK3oJd8cjFknC3K1DsHotdjMYhlJcH0Pzrjvv9GaVWUdKzNKfNkBn625rAO3bJOY5pwnXEuvovigz3QyHuxxmigf6yqNEaPE80qnNNPMD%2BtVXQ09IULFHFAeNNRWE8OhI2F2Ai25YrvLjfAkipcIWf%2B04rXMrrosyAq9XzAR7%2FcyWbF3GhqOQg8AFZpb0AH8MbnlXIqFZuJMnrIPwZDDtMJl%2B0K%2Bf0lrUjgxPaGCE%2Bdo0CnijWtzIf%2BZ%2FnWvUvXAll20jReDwwsHoDQ7G6lRTdd%2BoIkRu7Sf4zn3Rbb9Pa0diiOTWdN0VjmQaGDZ9OR%2BBIhkMaO1JKBjNpzGSQ7nmT%2Bpa0671rJ5VvNNAHAYQspwkY6HgjA2IIT2zJsMPKCVcMm1WixNof9a31sKgCerx9qjvBom6Ci%2Fwau9CcDwcOkEWkzpUK9Llq5MyKPR%2FrlxuixczUnM66ktfH1zW1rbcLNTCn1pvCBjqkAQGZ8ExsDLLr3Um3hd%2FqbtePD25w6IwjOSJb95DvAsntkkB7PhZIvmybXlk1ePiWls6%2FSgGz9K4fm4AMHfa2EcvnKCSkJfqfowIhVCxyELnV2Iy4UHkXAH5dQn4q5hiw%2BDU8WLrcQ37aeUAVGIIyuWQfMplPGiQvawVNKpErz2l3PjgkMJWjB5v%2Bue85cLFRHFJXXC56Qegn1Jc7m9HSm08rFOEs&X-Amz-Signature=f9b15f600261acc30f7b88de27ee113badf230a8b5a49ab03b8588acd2f696ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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
