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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHAVV2PW%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDX0Yhz2VqtBVjBTKrmSX17s76ZX6BEeeaH7qF%2BkFZFmQIhAIh4bG0J4LfZj4lhzyHXyMTtgEw4Qx15zUhYE6egrIGSKv8DCB4QABoMNjM3NDIzMTgzODA1IgzBFdiVy5xoN6wPzjEq3ANSLLWNFPr%2BkOj2zSoxDuMk2dU%2BSCYs%2FPQ8EvS3kvss1j597ecRElED6VF4JTaLJ4Wj7v%2BKEQT1lkkt2r36u1qt54OWrCxw5VJS%2Fgl51574dVoof912LhSD9knQmUG3rR2E2%2F8%2F4Xsu0rhp1TXT6IXPgllz%2FQ4uwJy4uCX67ejUz7hFQ8%2F7drlSwTtKZb%2F4ddpIShTUVHbYpzYG%2Bx%2B4YtwmaH1hs5rNXy8aUMEyZTIkPIjQkwaedAL04ZMUKPs0hWu6TlaKvBob9pIyyAyKqzxF7vmOgoT0AzI%2FB0L6O1q8UBzSUT%2F1G%2BTqy%2BmZKHyocWekL%2B2zQ3iOFvXKCpEuQDwem16iYy3Cv4JQ6zvooESgnhJN47hQmGVvWKV3Yg3d%2FrOJraH3KY0goA6%2FIApHj13DFLqcGSFbc57AmB%2BWpaToQslG7GkLAL5Be14aniGjTB3Ol%2BQMnjjAWrn40lfakKrkS4cFyjaQXb4FNpMd9gfkWIN42%2FC0ePCxDx5TI%2BF5JnwJKN9%2BLBBxiymmq4wwGIKLZAOp7bTL6jeXMYvtRvLI%2BVhtowOZAu3BEOLGmGtIlsx0ft%2FrxTdQyY9s883UfZqkeaWmE4nSV7jXyOdI7mMOO00I6Hk8y59Pv3TpPTDYrN%2FABjqkAZsuRQ97dWRlSJHaz2G7WTUVF%2FhlwWNdzVd2JQjPBZdgqIoFKD0B9NIsZQEXCqE2H5lIbdHntXHo%2FWodjA3EtBHM13nsAB8XlnQW9W3Cb%2FEBOGNvWCzoRtOWOgdHvCT37OB9XfTdD6fuGLY1TkBoEJmHM2OhjUsEf7mQugdob%2Fi7xgDUqn8cMPnXX%2BVadgArC2hjcoPD7yByFg1wOWtzroBZkcmw&X-Amz-Signature=cc22ac3bc00d277e9b3bf838dea045911763e29bad40e040bdea95c6174721d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
