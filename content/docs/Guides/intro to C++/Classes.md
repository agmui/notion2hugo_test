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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7XGXV2G%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDaQcx9%2BNrXJfaAH14apUP1qMa6LGtmC%2Be9AAB9hIHI0gIgMYqSquDLIIdmslh%2BAmaYA9ig67O4gTj%2FzVhI2p0C3x4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNjAAML51GOrkz4yxircA2EBouuwsqbF%2FNAYz%2Bb%2BincFwYV1G0R7gkLTIAQA8TW9Uij7ICsZXhAKTSy%2FEDEOg6%2FCvZFL50IBfvterlZIVXB8IxTZzrsh1QMiaVzaHbl35Gs6FAhNAQqI72ldHt96zytVChgP7qks3klPVJO0EoGDnmSsPw3oPZSfsY%2BVQegbGCgPBRQlZRGomL73qefj46Wy0iI7j4bka2NyMEM3HGKUMGv%2FkPmwom3eoOqOKtkW9pDGZpapmOUQtiHAJqrVJ5FsJ5vgAn94YV5lTkVsdd06ndoqXOq3%2F1uZ2wgMKBOY0oEo6twntZsDyLwrbsjLXrS5huRTFRgIaXNjSkjtWQOp%2BmGOi5%2F0nyJfg8F99CCQMtkBJRiBFtHb4OkYs9A0ma8TEBmtNpxOkAJgX7Op5MbSFPgLzn%2BwygAQF3g7YXTZz3xF%2FPmFcXohYH8N7x%2Bdlxit%2FSNyib8jNDR%2Bna4KAK5cXin6bEvkS0usaM7ZalTYEWYfFnX9yYM1i7R8bp3bPgNfWPCA3X0Uy9%2F0LwLhZ9K%2BOTK0sWqdSMi%2Fyc30td1T9WpIMhgWPI0V6ne3RHWD74322uHNpXxR9A%2BnOjZBzEV2EdwVSMIKqtVK36tehoNpi0e%2FOHcHxf%2FXK25BMKKg1sQGOqUBd%2BiZEj4csUFbjB%2BP8szvLdDocCb53fXCRQac86gX0SHqOa8KJ39%2FT06aD5bbQ7TAYLfnDyv8T0khrYS8dn5yqmB4osMPquxrV3ia6EtNkccEWUeUcojAM8E%2Bz6SinuVUU0j2eYFuIDN9uz%2Fn6AVLKa3qpovCkcEcWzE519mhUwEAabI1FHYrJ3WOSM3WEZqdbN8nBpaWQC%2BDNAnqqNlm5mZcYDfd&X-Amz-Signature=3cadefe764825eaac6d04ddd73801d8cc514bdcb0e86444b523c6d4170305bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
