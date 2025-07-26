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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H4I6VGP%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC95rxw5SzhXaHu1vWMMQnyt3v95znH0RhXcJqUDq2hAwIhANbscpj9ydbGT%2BeMaTqcMSNF46mfWrBUy04K0ZHqcbf0Kv8DCF8QABoMNjM3NDIzMTgzODA1IgyaovU%2BFiSgZ5fV0%2B0q3ANrsVYklnJCO960fiK4Xw3JS6MgFHi1KrgO4oRkamQph21Va8SlUjO%2FHK39VtfpOwkONSaPqPQgQbU9KfDYQ5%2BRybBSf3wzUXeb%2FgHkoAgirX%2FG%2BxU8WB7XZHGjkJljYcklhC6SQRpY2LaOZ6iUc2PNoYKFch%2F%2Bwsj2lTHQW706ZwO0wou5Yhaag7nKGCLfQfLs0Sqp4BcxvIrI0zlNvqwGhq4LmFtLLBc3SVCv8txlsU5OA3malAnYtODPy6DT6TVKGw2xOoBfsOxLCeYkPuxpBotNlzyz9In0QNj2JBSqC7UY89FK7iCidOFAnUHGuXjstPDh1BNX59urJ8bivCm8Je6IAdEBogZw17sKLs2KPqzrjh3QPMfeyJ95gh9GtjfX2zMjBT3ZdeoiQ5eA35hpT%2Be8yxAhQHuVPjaJFggf1UpjZG64j8bwzoOvAq3H0T376FDPt8Kv4bQl09N%2BKK0f3K2cHN7wtJ1Tz%2F9hB8h0qOvlP%2BLdkoKMegN1fstTkZB0mRVm94%2F4lSF0mtopacKCSG%2BlZmjh5rIOP%2B68DIATF0pWD5bCNJ17%2FbD%2FxNYTIJjydsDqhf85ghYdqKkrESUHYhC%2FduBTL8PnHDuHRGnbpG0dW8Ew24hjSY0cEzDqwJPEBjqkAdTA6C9dW9UJoSbwHuYjK8JDR2RFC%2BsaNvD1xKJnyb03WZMaQSYjaOkH2PiEEcerBmrjFbNL5uTFVsH1IRXUi1e%2Fy52%2B4W3NO6B9VDZApiQnuKImkF9jfKr0tEQcbDDvKdvM9llWFMO33M%2FDz7d04jQr1cY7fgUoalFrBcIhzPDoKC7zbYZbqLVPP2d%2BGopiUfbXqJSPa%2BfJ3sR0iyRB9WrSEzau&X-Amz-Signature=6ec0e0d859e27d1166d426e6fbb68ad644eae8ff820f02fd24fbfde5f4d3878b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
