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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNOWPMB%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHsxDaXV8Jfj55acuxjrbaKH2RmWoBwHe3%2Fb1xNBxzklAiAOnIKmQQyg8B8QVC%2BizA4fCiReZM4dKVVDM1t362xx4yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0BGND4fySSMOE%2BNuKtwDudwU5rWk%2FGu9Akm7KqlWsdz%2BbUBXArA5KYTsAQibRUVVCnf%2F9WhNhVfsBBH45CTyKmOnJvwYtfSV%2FIEBVYUKltTpdsDQTKhJuI0YjRStlLaNLBUiIFPpw8pdAzymMhPID4714cVatd6Zdd4fIJzMW2D9hlc3pGLv4ZUUxcH4CJt6BgPAfKiLAAjU4P8ei0BDo3vnsUopFc7zAj1qE28AKItAuyFJiQsHA9%2FMTqTrhKF7mA14WHTvqLUpZqGLLKBq9Bw2YawNsHg3V7Zb%2FbvXLl6r%2Bug%2B0nTDLTB4%2BgG9geWQYAfx3fRbMMCc0cb6ThJeM2Ivd2cSV3raURqHUmlIyXTHHFrwRleq5EvpWEpaENWHKChhTWWv8L4q9Jzs8yEjWV5INbujYECsjnyHb9hSkzMdEjuCI6KM0tEg17w1wN%2BzZku12y7ywhW57oCrcDbVhIROOt%2B9rmH%2B3ITTRAPIBf1TnfVAwhGcriYGz7rjZ%2FlF0i0at7zgHN8TzdRJjnyjJw4NvGpO66pob6rGD%2BhhmBwG%2BRRHU42%2FtdRuWAIvO2aiFpGmZoH64gCU8My55ygG%2FKL%2FwjTfb3ejdh7dvOqD07AKRBCHnG7oTdIJfDHX2hWdCu5lTpOmsy4jQyAwsO%2FYvQY6pgEBPpYNsmjB0tYH7dP1fokm7lowvHuaMgXzxRPwlYEM%2FfJAQN4uMhmBLyLa6iLGU%2BadmFy8PfiL4%2BRAZIXyWN3K1fOEeboYqMOGpmgtPPBsZIO5LZkp6Pt%2FeDr%2BeoohqulGXm0fdOZI3WuWNIJJRUWWGF%2BwrqZk6hTD1OrroJDgPMJrsyyb9fNz%2FQaQZmDFm8gWOrJTJT71CnHTm%2B%2BMFFgoIOU30xqy&X-Amz-Signature=c0c515ecb896a1337229daa984adb9594438ef0543229e1d1e0683411aad0de5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
