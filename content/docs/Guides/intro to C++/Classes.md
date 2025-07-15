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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466273T3P5E%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T042935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAe42T1vuODN30YIuwlDWOk9535pc5ruTCqnLdfF7opyAiANbbfBa3bJZCu%2FLBEfqDLHKyt%2FmhlwUUoHgEf4cOgTUyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMji%2B8O%2Flbdw%2FfIIKYKtwD7c1%2FAJnInTi4zHWDstyG8xbuoj8q%2BL2fNSOJPPNF0XH92KdmkxcbLYUAnA29O%2BnxAWhECwatj1ZecvwheyEYVW%2FxLh7q12OkeH456E15fNqeZorWv%2FzhFWWgn18ASsHHjBnSp5a%2BDzDcM%2Bc41DE0OA9mdQUPMnQcIEcmqph%2BhGKhQmGHrxz4mx2bv414SS4VjLYhzkxGjSzbb2i8s3R%2BRb2xGQIb%2FNZFlsFTeKrM%2F7w0VrRiVttQ0uK%2FMfOzDW4mlmWydepQX3rEd26VIgN3PVixGC7Cjj%2F%2BfWSTmiqVlgWYySOVD7OPbAwbTqqUJPvoj0QA1b9l0VGgbSkjNYqJSmi%2FEKWHOK1GzA0Eje2UpHgZ7OBvdYw5PakjpaQY%2F0sog50CDyM02ScC1OuXz3dzcbeavQMHLWG5hbfohmeihmEFuxiQJW0hWTldKW8t0wy9phUc7HLCBDZBzIsxq2LziA7Yjh5W2aXCLkH%2FB7ecXXlWXKq0O5ll06Ju47StoPqmVAV%2Bud7T5%2Fmk4MG2sjHmMOIP9qd8wWEcI6b4rv54FUIUeOvXqz7pywL1XevlNuj9B9plS6%2BjDxlnk8Q3JpDUbFxcUonesUt7x7%2BwvfJq8jWc1lFjtBMh%2FoyhzgEwtarXwwY6pgF2MMFo2aN5pr8%2FslZPhqFyrjrlYSfBjjSelUJu1k7ZOHOTZ5OuDF6x%2FPpNJsSxCKOCMF80iqjo15nQBhsb0z18Z5RxPuSmcQWqHC%2FYm8fA8UAeBXZemQPnYz5mkTzUsReyYF99%2B4SiJIPBpRh4Kr34w6T7j3uV2ooFM87B6nLFZ3vtgd06IwKdL%2FsYFSXHnDtHaQ7NrUjTQyfyGLaayc2KQgcWFPJe&X-Amz-Signature=b3da22b1f0f85f9ea095faa022482de48e2337037eedb80872860f192f11935e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
