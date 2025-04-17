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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXJDVE7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChb4rXcmJoEJlABFBSI9pVT3mRDU5j3y6WfqTQKDwbSQIhAKO72rHC5owYXQtzdLBapATHn7j3qAFwA4qRZTfEQeMfKv8DCF4QABoMNjM3NDIzMTgzODA1IgwKc4knu%2BV9fYt7ptYq3AMPDWEY6j%2F%2FaRgLY%2BH615SUgpFCMm%2BsCdPetKfqrx857GxnOTYR88PBmxa%2FRik0gEbRMSmahd5sn53tsqzehj2U4SaWYmum3TQYfEdEPjrhdKK7IS5QImMmtyCLd99u0V9sisgR3BnQBacfQxSZXRNF05zsQ4yRqlBQwT4yl1KOWKjjsLOi7exYkdL3y79Ac%2FZwvGC0gP6xuGwYsV8DJjd1q%2BMjUehvbUHIVajBvHziMuTzz3NjiP08gbd87ZCHBDG3fkrMj%2FeWzLInR0eCBL8ziw2cU3IAbmJrc4q5T9pN%2BO0e6GVwYCcB7Cmm5FACaDyOkvY2kSZJaqiyETprGLk7zYwGQKpqrsSoVcudjIz5kuS%2BV6hW7%2BlxLp6xm7n2JgidDtfjR6ULB32zOMVepcHiakte82YwQEJ6PCZfMyv%2Ba3fxL1sIHVZsYA0JWfjWmEGKxBEAUGqtbySaDdSkTZ4AoDAd88JGlV8c%2FoWaXAAm4R0kQcCAGqwK%2Be1AZiDVwSUzBPi1uwaYfNz9svO%2B71dY1x4Cb29ypxQZEwbMyH7DALr5%2FqBVlrWMLd6ruV%2B%2BpRlz27KETDQTSNsDqLoMx%2FokGZRPW4Q9SS2rAQdVS4jeKtezdzxZrc64YXyzsTDK%2B4PABjqkAY1YxS3W0R%2FtKiEfMQ%2FAoy863mT3b9JEQy4npj2EKiZjqYARuJiKlpTirO3JlbPyxObDnc9jjKHIcMM%2BgK9eq122Ha9SGgrAA8VS9j%2FU8w1r4K8KNJBF7gLGD2LxCvQNUbZ1eUp1xXqcrsQZ%2B2BiIM8lwnbXnSl67RJPo76pA5Tib2V1hmKpOkcYRpVZdZLI%2FiO82VeA7muN0DeU0tnabV7Coj9b&X-Amz-Signature=5a884a62ae19ee916777be7890f4427db812825e6db8527317bfaf9e8b98eb41&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HXJDVE7%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T140833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChb4rXcmJoEJlABFBSI9pVT3mRDU5j3y6WfqTQKDwbSQIhAKO72rHC5owYXQtzdLBapATHn7j3qAFwA4qRZTfEQeMfKv8DCF4QABoMNjM3NDIzMTgzODA1IgwKc4knu%2BV9fYt7ptYq3AMPDWEY6j%2F%2FaRgLY%2BH615SUgpFCMm%2BsCdPetKfqrx857GxnOTYR88PBmxa%2FRik0gEbRMSmahd5sn53tsqzehj2U4SaWYmum3TQYfEdEPjrhdKK7IS5QImMmtyCLd99u0V9sisgR3BnQBacfQxSZXRNF05zsQ4yRqlBQwT4yl1KOWKjjsLOi7exYkdL3y79Ac%2FZwvGC0gP6xuGwYsV8DJjd1q%2BMjUehvbUHIVajBvHziMuTzz3NjiP08gbd87ZCHBDG3fkrMj%2FeWzLInR0eCBL8ziw2cU3IAbmJrc4q5T9pN%2BO0e6GVwYCcB7Cmm5FACaDyOkvY2kSZJaqiyETprGLk7zYwGQKpqrsSoVcudjIz5kuS%2BV6hW7%2BlxLp6xm7n2JgidDtfjR6ULB32zOMVepcHiakte82YwQEJ6PCZfMyv%2Ba3fxL1sIHVZsYA0JWfjWmEGKxBEAUGqtbySaDdSkTZ4AoDAd88JGlV8c%2FoWaXAAm4R0kQcCAGqwK%2Be1AZiDVwSUzBPi1uwaYfNz9svO%2B71dY1x4Cb29ypxQZEwbMyH7DALr5%2FqBVlrWMLd6ruV%2B%2BpRlz27KETDQTSNsDqLoMx%2FokGZRPW4Q9SS2rAQdVS4jeKtezdzxZrc64YXyzsTDK%2B4PABjqkAY1YxS3W0R%2FtKiEfMQ%2FAoy863mT3b9JEQy4npj2EKiZjqYARuJiKlpTirO3JlbPyxObDnc9jjKHIcMM%2BgK9eq122Ha9SGgrAA8VS9j%2FU8w1r4K8KNJBF7gLGD2LxCvQNUbZ1eUp1xXqcrsQZ%2B2BiIM8lwnbXnSl67RJPo76pA5Tib2V1hmKpOkcYRpVZdZLI%2FiO82VeA7muN0DeU0tnabV7Coj9b&X-Amz-Signature=c39872e1dd9cced7bda9ecfe24211ffcd1f38f0aa74243bf7de7e47a3fd61897&X-Amz-SignedHeaders=host&x-id=GetObject)

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
