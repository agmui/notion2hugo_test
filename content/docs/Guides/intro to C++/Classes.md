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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RSNMTF7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T161324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD%2FVP9EJvkAzTXpOtRRXxaUu%2F5sqRyUAV0oM9SXRCtEEwIgctD8OLkYLhULA1TeM4ZfKv7ihW07WDm%2F1YBKAu9LCp8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGjevEx27XCYfZheiSrcA6rps0hAY3XqVpWEA%2BTA50vq2zmToVNarR0ZKi%2FR%2FY7w4GICvTy08ned%2F1jmKkBYay9oEMBFMxvCB335bZI63tVXR2r4iXyoK5ZaMu8pWWMGWHgvzYO6seqddsCeTUuNrL7g%2FRJgwLCa8J8b8%2B9ranQV7s5uQiMm5WfNft6TJPSLSx3prb0o2jbypItk9Dxzz2fd7qnMFvvZlxJpiXT3XEu3EA6lKnJswoWWEtRDqBmKXH%2FV%2FMMpLUiYelCxq6g4yPX6L%2B4JcfSIGEsLWABL6Ywn3%2BpDLDRHBkNl5NnKlm%2F1NBJy8V4mAdMfcVVqnWGvhilheQT6BIBBx98f%2FvOh8tXAq3cibyNN4J%2B0D%2FXPYOjsdNrVjTlitWsYk5HW3SFrxIkGqTSFPGCzhq07lPt7lBgZUDl48u3ZJbsbPN7OljT5wckfdIiFBHP2fPjg9i2INqW%2BxrsotGZtdrFdtgbFLzKRkKwy9gUFbTJHjFNVfrtWrbJ1tEajrzYtX7wXY82ZPYkIOH1Ode01D6n3XZVwMMOABOyH0hPUiFkSoVU%2BhUC3%2FCvHQIvUvthdP%2B8Z3r56fmsun3hTnHwbcKFYs1iEpqBttM0Q%2B8vXdZ4Bj6lUgppNk3L4IhhiVX%2BXtMhmMKiRw8QGOqUBvH0lRG9Lr9nZ3B%2FYQv%2F8t1woeU9Iau4aUSeZqBGnHW9D7gA6Wycm6SRx2vhG3NehO4E5yoS4CqZrzEeUHCaOF3X3oih87McO3wmHolDsxSLQShY5oNI7UsAgd6ImsaNKM7d0gRsgsChIlD%2FpqqSJW%2FsaiZ4n9MzokNa%2Fd7ddk%2BG6FvELMGzcud2hhVmSVgikajvLkpwogmAfexWxoRJdcPS%2FlNUj&X-Amz-Signature=5ef8b323c4bfc1d578d44a7cadb125fe0205f354e28946404c2531f932ed9419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
