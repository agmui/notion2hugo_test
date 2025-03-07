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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3YNZUP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZGiBNLN%2B5Hi0EnfiM0DDKVV9tlqbFD08C6mEVtJ7bmwIhAJzHt%2FBgWFrJvkd1Dv5MMtKl%2FT9ETtinSOEyBeLI28K4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igyxruf29ph8sxzCFMIq3ANg9Qj3S1LLAMo974OmlD3hmcx%2Bzaw%2Fd4pfLIGE5kIXS0iD5DS%2Bu%2FqVPPyCftpIm7Q8Fc2D1dGydo%2Brwmn5h3csa103iu47oBbzS74%2BqDN6r%2FdETr3DUlIxilzbtLyYfdJaJaGNZmg%2BcmBQ64bno245JR3nOgTI%2FYaCWMG5dkm6s%2FuFD6A7Jh2ga6BavGyXPQBUBxw%2Bn9%2FGKdOjV3h7aaCen%2BYNmUJIn65F3y3tohC%2B%2BJgOZphHo6yHPYkpl9ZjDyA7I85WEH9U1mWrZ8FiRsDXBGEod%2BLua1x1drPjkZ34BE1dykhbn9YYDeHmCSi4vULp3qb%2FsaDhcXqB4%2FXLTaoO0huJw5CW3odw4JMkescG8XXLRi875Gp46qj6ZBobs%2BS67ictyO2ujujyEV1%2BAixG%2F9%2BylwBLA1PP4F1%2BidWrOGmTem9Ofya1XhWnHbbTlzB%2FsTxUfSrWAjMQIGr3DgoPvyEu%2BH%2FUeWHme1WtExPiMVQrsmELq%2BrV8vmTbwPFW5Ec9qNWAdXtWm4tSdijaubbNNbb%2BklbNHMNR%2B%2F8ZMsZcLipImOGf8iAM5ZuOgAn1Tm88p0lNE7%2FtZIsSS2toDG5z3cDNkZ4%2FZMsenjD%2FGqdwXTjWtpIEuAaNp5LfzD4v6y%2BBjqkAf4OdG22vXv71ZZIdL%2Fp4TtAgU87CapD1sJtm%2BRxXduFrPt0A%2BenGqnBY0bYJqjeTVDIZJkQWXHMH%2BPp%2BhkTVbqLVJRfHySBoqHEdZ95uX4pb6XajnsDnFudq%2B18j%2FrC2DvenCzkFrs%2BM1MSXgrUB1ndlO%2BWOrDdXGwcezVwBe1y8PHpAZajrQ%2FY2Vzk3ce8Csc%2FKvPzHnBBkbOx249jfRKyvinX&X-Amz-Signature=7099175d4bbfe22accb6f33f994e03637544a2753074018932b5bd8a162cd641&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3YNZUP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDZGiBNLN%2B5Hi0EnfiM0DDKVV9tlqbFD08C6mEVtJ7bmwIhAJzHt%2FBgWFrJvkd1Dv5MMtKl%2FT9ETtinSOEyBeLI28K4Kv8DCEoQABoMNjM3NDIzMTgzODA1Igyxruf29ph8sxzCFMIq3ANg9Qj3S1LLAMo974OmlD3hmcx%2Bzaw%2Fd4pfLIGE5kIXS0iD5DS%2Bu%2FqVPPyCftpIm7Q8Fc2D1dGydo%2Brwmn5h3csa103iu47oBbzS74%2BqDN6r%2FdETr3DUlIxilzbtLyYfdJaJaGNZmg%2BcmBQ64bno245JR3nOgTI%2FYaCWMG5dkm6s%2FuFD6A7Jh2ga6BavGyXPQBUBxw%2Bn9%2FGKdOjV3h7aaCen%2BYNmUJIn65F3y3tohC%2B%2BJgOZphHo6yHPYkpl9ZjDyA7I85WEH9U1mWrZ8FiRsDXBGEod%2BLua1x1drPjkZ34BE1dykhbn9YYDeHmCSi4vULp3qb%2FsaDhcXqB4%2FXLTaoO0huJw5CW3odw4JMkescG8XXLRi875Gp46qj6ZBobs%2BS67ictyO2ujujyEV1%2BAixG%2F9%2BylwBLA1PP4F1%2BidWrOGmTem9Ofya1XhWnHbbTlzB%2FsTxUfSrWAjMQIGr3DgoPvyEu%2BH%2FUeWHme1WtExPiMVQrsmELq%2BrV8vmTbwPFW5Ec9qNWAdXtWm4tSdijaubbNNbb%2BklbNHMNR%2B%2F8ZMsZcLipImOGf8iAM5ZuOgAn1Tm88p0lNE7%2FtZIsSS2toDG5z3cDNkZ4%2FZMsenjD%2FGqdwXTjWtpIEuAaNp5LfzD4v6y%2BBjqkAf4OdG22vXv71ZZIdL%2Fp4TtAgU87CapD1sJtm%2BRxXduFrPt0A%2BenGqnBY0bYJqjeTVDIZJkQWXHMH%2BPp%2BhkTVbqLVJRfHySBoqHEdZ95uX4pb6XajnsDnFudq%2B18j%2FrC2DvenCzkFrs%2BM1MSXgrUB1ndlO%2BWOrDdXGwcezVwBe1y8PHpAZajrQ%2FY2Vzk3ce8Csc%2FKvPzHnBBkbOx249jfRKyvinX&X-Amz-Signature=cc4d2999b2e6c60f0014dee98823f50515c683e92004ccf03ae8c0e4605662e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
