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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IIDPDSE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T071515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsiARZHm28ubXXCJMWnDFl7pmUMqfW8oqvrn9vndMcngIgLNypnQqR8r1whH99pXuAUtViVioHSyCz0Nzv1SS%2FoHUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtmDqgoNWBMgxlFpSrcA2eVoiWrb9R1H1zJJGInCkm1yK5B1GVOPNfrF%2FFAVfeLI%2B2ItoGrgcd%2FbDmtARE%2FbAhAZyn1ABLmUZwtRq1uWLnliR5MtJmD5z4SYj2v0qnacNLe%2B%2F8UpuXTOsdAg3RrKlcVLiwVlIEn%2F4i0sgKQr644F%2BCcM1MITk9ZfUOB7ggIbt8bn8nUk3%2BM08TNSqeDeqp0xl42aL7F05wpjBK2dx9cZnBzFhYIQKlavEBqrQVIKpqQCseMaFE%2FB6%2BwDay%2FagZUMrnB64SY%2FqTrFHHhXhgLPYQA0%2BNaIu9fS%2BpxgMFzdUWJbGXJO1poWgldn2RJ2eAMSWohh%2Flt4EilgkB0RgwagYYSfjH664MW4JemBvYSjw5drX0SoAY4%2FCFzxReY%2BsFo%2F1NFUKGDwi6JuhfmQFXtwP%2BlWToPbVl%2F5qW2UyOS9YvDaP8n8tDqcd4EFLDfyVbENfzw8KHish2HjqAF%2BMARVgV98iEhGazawJu3LVTnbJj9fUttHMcEZHdyP14poViri6oO61dZezNmaNsOCVvEwSRkhRhCOnLSqMFMQgen2oDl2ICv9TxKiD%2BKeKye7leWCe6rQH24HhwKqlHT64B2g5vcAC7Lbkis%2FjCR7dUuXDsBtanKTFAOhd%2FfMLvapsQGOqUBG17e1LzZb551JsJJ1etMH6QdTxaueTx%2F6XomI9MKvE7hqZ3ZGdW5reAyYeCNixY5%2BWzcukcOOYgd9JtyWVlDZyab4YFP3AFEHl4nA3BgCi2233IixpewqD4teSIDGu36jiOKqVSqU1fvUx7EFtzQXnjoxyiD%2BBVaWwBkEApOqXS1juHN2emwWl7pYGidUTlsiuuW6PTjLQvHvtr2nAzY%2B0jGnlNS&X-Amz-Signature=738e7f4b14eaa3ca29c75e94769878d94242238c8aec1aaea5609daa0222cf2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
