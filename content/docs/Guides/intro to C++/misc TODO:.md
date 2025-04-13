---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7LT7OF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDa1Zby677HIxbnLkelLwT7wKlQ8ZjcRe1IZoo%2FtwrFlAiEA1aqUqWuZ%2BZCnh2EqxAEPRd8heZspvycqOaYzRjmIN5MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDppDNlGOK%2Byjr9nCCrcA7PcF6CjWG8fv6mIg4MOo3Sn8Eewtnoh9DYU4tuKeWst%2F2P8ML1QdT0dkA45vsYyFki%2FobTy5hKjm3Gl1XvPozgJpIidYvJdmuOLB44hC7oVCbLsxVyFkuVE8LSkrLOIn%2BxGYprJl6FINb1%2BrQhkm8WwIFrBDvD91%2FneV%2BpIJzOd4odRw6uOJAtsNtEwAUhEua8jH9e0JGGyMSEj4XgMRL9X6MzFTszPYfvAnlU9Mef%2BoqtQI4E788Qix15IVNsmgmJYQ4z261L77ubxduQHlVY%2F8cg2AG0k14uxLNu26Wzdm%2BsqwmoT7zHPfYBAyjq6FLxSOYmGXxDq1VSZE8gepMr%2B2Y%2FJTKisrAxaxHr3SEr5M9jq57qwTA4yVsobmuG%2F2LW7y248tOf3CoP91KoslXmjq%2BuZSYv7g0LjJ9LABzsDy3ZI06W2VqN1MpQc6VZpPKFmMAdafAbqXjGskRBUmLoSjX9CxXwL3bIR8gfHNsPgpsWXD1QmeSpi%2F%2FAIE8iH%2Bh9C69AbaMTeyGwFhOfrGnBnJwGXykY6VirI4HXKQmbuiIfAmDAfB1aAKxRDiYT6jvUgLFxKMfw80woeFG1kYYz2pJY%2F5ycTiDV9qz6COoRl3sbsrR5X6UDdQT0WMJ%2BO7b8GOqUBpgXoCk12spf%2BiA1QBD9Mv5F8NPwquHJMHwpwiTbthrNg%2FBbsVn%2F6vHH71lh1xKp8HqRqb7tsnmWFztN2A3m8R%2FeHfefCLBgFQcettVtUXidgoeRB9PvrDfOylqUG1KTOy0idRIGQXZjxLVFajkzNPiPMtY9SVzIzdii4rRkL3ZEMI1X0SQee4D0Vdqet7%2FiOLyAbZX7kSrimXWU3vpHRIiu%2FtmGL&X-Amz-Signature=c4c4d084c45fa34f8b45403068ab680a0cde110378dbed74e7c3402e14f06c52&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z7LT7OF%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T070735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDa1Zby677HIxbnLkelLwT7wKlQ8ZjcRe1IZoo%2FtwrFlAiEA1aqUqWuZ%2BZCnh2EqxAEPRd8heZspvycqOaYzRjmIN5MqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDppDNlGOK%2Byjr9nCCrcA7PcF6CjWG8fv6mIg4MOo3Sn8Eewtnoh9DYU4tuKeWst%2F2P8ML1QdT0dkA45vsYyFki%2FobTy5hKjm3Gl1XvPozgJpIidYvJdmuOLB44hC7oVCbLsxVyFkuVE8LSkrLOIn%2BxGYprJl6FINb1%2BrQhkm8WwIFrBDvD91%2FneV%2BpIJzOd4odRw6uOJAtsNtEwAUhEua8jH9e0JGGyMSEj4XgMRL9X6MzFTszPYfvAnlU9Mef%2BoqtQI4E788Qix15IVNsmgmJYQ4z261L77ubxduQHlVY%2F8cg2AG0k14uxLNu26Wzdm%2BsqwmoT7zHPfYBAyjq6FLxSOYmGXxDq1VSZE8gepMr%2B2Y%2FJTKisrAxaxHr3SEr5M9jq57qwTA4yVsobmuG%2F2LW7y248tOf3CoP91KoslXmjq%2BuZSYv7g0LjJ9LABzsDy3ZI06W2VqN1MpQc6VZpPKFmMAdafAbqXjGskRBUmLoSjX9CxXwL3bIR8gfHNsPgpsWXD1QmeSpi%2F%2FAIE8iH%2Bh9C69AbaMTeyGwFhOfrGnBnJwGXykY6VirI4HXKQmbuiIfAmDAfB1aAKxRDiYT6jvUgLFxKMfw80woeFG1kYYz2pJY%2F5ycTiDV9qz6COoRl3sbsrR5X6UDdQT0WMJ%2BO7b8GOqUBpgXoCk12spf%2BiA1QBD9Mv5F8NPwquHJMHwpwiTbthrNg%2FBbsVn%2F6vHH71lh1xKp8HqRqb7tsnmWFztN2A3m8R%2FeHfefCLBgFQcettVtUXidgoeRB9PvrDfOylqUG1KTOy0idRIGQXZjxLVFajkzNPiPMtY9SVzIzdii4rRkL3ZEMI1X0SQee4D0Vdqet7%2FiOLyAbZX7kSrimXWU3vpHRIiu%2FtmGL&X-Amz-Signature=346117469a60f97f4532a077f3a3170280db475e6a75c9a917d4fceab6dd3907&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
