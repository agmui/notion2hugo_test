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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYHQA2KB%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2B%2BvejZGnMZh9e22rLQrlpSB9JbAdD31K0O6gyuXSVgIhAMrHxnRN%2F4NuWjwx5LhiPEw9pqWb1Jp1G8Zfk%2FOZHkX8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwbq2%2BguAamemTQ5F0q3ANn8rGntxm%2BebHapgEoJVT4hYQ5SChtNYwGh%2FvL031SA3cJ1AzVQC9sEy4AIJ1fnBZx%2FjCo1P7%2BVjsFd987JaQtRexrK8pu1fM%2BWAamGLM%2BpiMwE2vihHWJvpG%2FQryfzwfFV0Fq9P132RCCKt6G0GsfbAXuSm%2F3HmbxB6%2BBEata0DIci%2Bb1k%2BvZR46AjnAsZzJrGIAs091WxWmSSqbT8nHn2T8CUSAWCDUW0%2BsmZdUlPDtdeQc07%2B10kD5k2DnCBhFXofnngLfJum0C7lHHNGnJKSGrnMm7f1yHSzBqEGau6Do9f2EQHfCGY4Dj5fSvmDO%2FydlVMEnFRJoxspsdwMNC4I4I3BN%2B38CcGsIBgRCWESIoMfM7PW2n6sgilcgnL%2FGjuQe%2B%2Fp9ygUZexEWfJuhAuTirwCl4aB0uecoKCUt2gvDP04ThzE9bsSReSypfmt%2FfE803yyYtszHg9u2EaD5cgpSHa4fiUrSsjk75CjH%2B%2Budu95eHPvEpLC8J4Wrhl9mUNX8XwfeXsNVJ5AAVIboCoyWUJPRdBAJkG%2FCLqfJlop66QmhUYRIknBvzSCeieSpOvYhP3bQNfQyUEKGSd12K9t2skqo%2BVCastFwqTGHs5uDo%2BJ5A1BmBIuVi2DDDrPfABjqkAXsJ%2BGeHwTaCQiUs%2BD3pyFk7ucWunQqnqbzhMvan1gubvdBGnxDg8fF8A7sA8R45jK%2ByTFzpBngYA8%2BEY%2FVxBVDdEomcTj70bBZLFmR1FY%2BPLia1zEhieszAgQOdLHc6HByLGqNN2IrYo0mHzEsU4%2Frg3EyKpVSdU1%2BZ2GVs7kkSEqDhY%2FBItYAL4YrarUzHVfY%2BWHtPa%2FlyOx9Qr9vwFr1SVkF4&X-Amz-Signature=f480a4b5c647f32c5142bbf6c16818e9a8e25f3c057a224b282b5f01969bdbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
