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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NBDGEE%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIGQJi7RUWOE%2BnIrnM2XZpIILWaw%2B6noQXmnxX0wQ3dlCAiBM%2F8rYmJcUxLksnE8PyzGa8Ao9HSOt3CJWiT5DsXhQ6ir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMybGAVdQl%2Fi%2FT7ljhKtwDaA1Y2NgEX5%2BCnz2xxfT5ssSa%2FZgJQp5YQbCS8Pfzi7oH0z3g%2BsSd8hU0bjXsgeJgGd8T6eIIgBiUxtZgsuUIn%2BmC23ZNfLpNypHJqyE%2Bv1Qx5tMV1kGS6JwwYI2p2ksvsOtVyz0SQ1bH00v6i3WU%2BNSkWCJ0uEDohap6E1xUtvOoiOiXQ3UnC3ttzejAwlIxHFMjKy8dHZoSKvfCOG7FXq8LauUU1aErb6bO%2FZ8UOzkrc8jgllI7uIz2L53tVNXZz%2F3jVhukNTd8ixuAzkGd7FfNDsXEUwq8sUhJiA61P3A36CgxBNSDr516sgS1bdn120ZrLWxDN6z7phv3%2Fnki%2FzZhBFuurPU3GcYjQq7onRyZowmZiEorqm8bmciya7jPTb5HEK0yz3Oj7bhoyo8uw1r%2FMEtvyXm5XuDlJKksiX64V8Z7fMqRaRIQNTs0MDqT5grHNBZKQ5R73PhUlIyH1WqHurAp1FWhpwGRdAavhck6aZrHUJ3eyypjeJFPGPoSvGZLREzLahARagl8RpqSvMtZiGL9Wm8um4t%2FJjds0ym9A%2BCtLXBhhibKyGccXTM7tcVjQz4nrLuqCAsFKNWEkgYxIwQdvK5yZXLIho%2BdNZiBVCAWYJFLJ53rNzkwgd%2FMwQY6pgEz9XrHTmT9UhXPj3yEWPzDpZqYCt3rz8LHhUu5pqv2S6Tp4f6J15amfIaodU2IT315uIRKmpFAhU3bBsxTj3suLGGgC8cNKeBiKVhNxM1d1QgWxZQTvCT%2BJnaRd5RmBOvqIfKSpFJuNY5kSXBuShvgfEf16vGJp9BQ61HwhECJAXjknwXs6R3%2F4rgAUkV5BoUS9RaGUaVs6Z9ewpHAezXH8SkDhhi0&X-Amz-Signature=897f575f092f2a6a1fb78639ccca2054b4be79328afcfc8c9d24ea96a352a8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
