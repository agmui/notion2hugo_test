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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFW3JR5S%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T061122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIDKTn7vrHxc8TcSpaArXQuMZrhvI6PEvBZbHfG9f7xq3AiB%2FHo0cxkGomTjS8lnz0yEWr1Iwgy67C0lDfO5A%2B10tYyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlXjH4qNj5%2FCbMjqgKtwDUHCnu46CCCMsk2u3oszcMQtq0Ev9oZTIR2O9Xl4pdPVcVXsFmkAwu%2B4UJlgNeJ8l5BkATO%2Fj6R6iWaEyDHbnkH8wkyrfkcDTJXXl6k3XfMxvpeH15pdpC3QHpWHQe2BZMA90GbD3AaGy1RPYAqCrVaQcUgRGCphVvHf5UwaJcs5Rh2VDUPD49S%2BgZv6%2BzrkcsVMtNTV9A1hFzxrL6c6dAHdMVwBYlMc6mULgw14XMC3p3p%2BwQRvgHha15X7kweoTW7Q1HgV5zVhmAzA4k1S85pDjNsED1yn9Pp2hon1SXIAMzP7FFeYZZLPcKro2WcXbzeqd4L5%2BgRqBp7xdBVU5lQQpcZWSMU570wqCsncp93NUeOqmHk6YjscdYrwP0v1WJmz4X%2B61TjJaUp%2FCkStd8Xyb%2Bg1YUH6IucZiV15plwPbi8dnKJ%2F%2BDWKKs5AkE3J%2BOxwRjQjtPWjY1ECVl0sqtwvo7KpVrqce3fFUpXK4RyXzeTMV16B1DcnEPgy%2BlQBaFOA%2FoJhCA6NayWbUpz%2BclZ6zSoho3Zb2It9wBBdOA5uzIxxXXKB%2BCkQOmtmzYgPYu41W4h%2FtB1Zcvd%2BBE%2BA95EZ8GgRHmDRraKN5IqXIbO%2BceRZrnZIh1ZYmQfMwprvEvgY6pgF3n%2BL%2F0vZdsI0u%2FNcd3kWHPvjj%2BG9RYe9tPRwbPEV5vUakBM1com4rU9fKwVvVDd3NT5C8MDQcfLVNhs4KPEl%2B%2F2ZAlprke2N977BVeLiNtXAjqoa40UHKynrnSyu3f9qKWc%2BQN9vs4R7rc%2F4Jv4rOSoUuRwuqeRXFKeRc3qMCdd9JYJjGeoOlOdPTDhgZzBkQrYwnnNdfUFDaHvpjS6L4jnuCZhGf&X-Amz-Signature=2045c6337a032443ff36316305284f1cd5c61930ab5a6f9ba9b246139c4d173a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
