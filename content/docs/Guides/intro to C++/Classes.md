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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ICDRAAL%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcjyeZMG%2FzPaSrla82iv3AqWbzRPorMCiD7BQ17fkQDgIhAO2ydV2DcgRkBTz2vwADz06mNCXzklcJSz59IR3thqh%2FKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcYHvUJI%2FTT%2Bnxwogq3AO1N6v8MKmcFcCveWics8nmtFUledmdMOC15fOnNPPZ%2BSOiqgVe6pJbQAEYFatL0PfkT4z8SkahYI1MnRCyImPfUpk9EBwC7cJsu6S%2BuMxsocwGr%2BovaD5FMFKmvazEuo9JQOr5yDcVpX2qqHaKMHmNxwBSzIIT1HoB7XVUm8P4w0GHV3B0TXK%2FuijUmQTzORjo90pe5vRVdCM6e0tW7evRX89KIrTiMWQj8hyG2aGWOTkmU6vzUDWjQTdfN2SCF5iTDWuNWU3ArsWHIiQviphGFXXTZuK13g01DjtqYzjMh0v5USgnmXhOl7Dg97XlYtZpGZzGNfkxeWL4B2tsn8vey8QpbDxJolP%2BBJEBIPol93aveXaTfuUffKOYQpUhsJx8i8OaJ%2Fp5uv8XZ4CpYkxOMiLkakgS75cumEQa8cAnery25AnpTafAD6Zo%2FkCQ49s0v%2B1Wc9xhQE581JLnOGIlNHly9wB8HJXyZoEUay0sy3Wz0TGHdbot8gDW5wzvbJkwlrJZpCqt0HxNz7eCD42l9aIj5wkGGFojBv%2BuVPWaQ64Jfy1iMBJ9eHhfJFi4QldPE3Uwdn9N4aLFN%2FfQC7RcEf7tXPiHz7CYWLMLt2MaOTozffnfT4QV7jmoYzD6u6i9BjqkASeShmAvdtPQDgA2GuvYuEltsD%2FL5H%2B3oVe2RRpeFYlEmykl1JzHondgv6Y15flmQee50qb9OoswodGrZkhTZmk%2F1k%2BFC5Eh2%2FIj7Rulh0pbVl2d%2Fdxhd0vbWJGCClU5qjSMiYWPl1%2FlRbElPcQgs9BUtnB90TzhNMLfNtkKqz8nNG8t5D7TUfhm8eCptS2EpoUjTTy1vFc27zAEZZfncMv5xtlv&X-Amz-Signature=58a160a067ec67975870ed70f02ff46c2916bb2879843c98cc5de84482cdba71&X-Amz-SignedHeaders=host&x-id=GetObject)

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
