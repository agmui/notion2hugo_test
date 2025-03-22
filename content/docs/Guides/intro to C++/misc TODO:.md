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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B5CP25%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDINc4XWEhOdfK3PMulm4zrDJB9P5urhZvPToKMcIwieQIhAIEg%2Bf71vJ5La7zTd%2FTboeRllI%2FRIY4g%2FhvWeJCym6qtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB0Pb3KQEowiNXwsoq3AMyBp0vM%2FP1m8FgKeFpoI%2BMXaLPZyyoFsSJRBWi%2FMLd0drfTeC9vRqBdFDFPvWQZwmoPeWamviHmSgKhpOXjXkKlQKvOvlZIbe82FVaqlVJF3Q%2F%2BnM4rsFI0gfeAzkfz%2BX4cNzOVBs2yRaNo89hz718e4jRi8JJo3gUeNr2yUiLnH3xQdtHFD%2BMoH6DPoou7ZjyLMbsem4NW4aHV0JX3EgaLLmckIE6n4LDOLoqcKM4wGyzbh73oWYmUu2CUAocCJy0rZqqyIs5z5WUPKnVFgibaVw%2BCspBt6CxLlZkNdUPkLHHQa6M3Q0k0GFGpxrmvaXXb17SDt7qfzfT3Lyg4PAa9k1QtBMNtnyidLnettxT5fdrxsYhE5D6I7ZgJQMvIKHQx0TwB9tHGkY%2BatZykDa1xuZZNSQIZ9Vy%2BYHx%2Bz3cToFzt%2F3CluaW%2FgUmV%2FQX8UgP2BVhETALM%2FtGh%2F3YXKC15SQ9QRagxrWA96yDTdagvvgxj4W2eUQTxnImq%2FDe48r4aR2q133OioZFN1pQOKlaTuQ%2BX5Apk2Qz0B024ENYtKxX8%2BAIuSjWr7Q6DY9miVW%2BBkxkLgnpbynVA8xh8u1TeZnnTjlM6LZ%2B8QRsvKtcg3yekw0RY28OQusMZjCnq%2Fm%2BBjqkAbSHtCbN9n%2F6pdJxkANlVp7%2BI6YY%2BFLFlG%2F3ID88%2FNoQqAJ8grYxj1UNpCZwTwrSBkjKQq8E7%2BGKnDnazRKXyiR2Gkk3E38RrqGZmsHMQycArAqQB9qmI51w4oO%2BKSKzwqxELCyu9xtXYaWTEvCwzIJYtm3ZSJqzihaYDpZqbJ0t3pNL4FMi%2FY7Sv8KoJlVTfNPzPSFnLa%2BQxHzK3tqzU3fTmTXT&X-Amz-Signature=7aa08a3698933a984406223f2be47d24ba2191f9760ad4dad613eea34e8f30b7&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4B5CP25%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T080929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDINc4XWEhOdfK3PMulm4zrDJB9P5urhZvPToKMcIwieQIhAIEg%2Bf71vJ5La7zTd%2FTboeRllI%2FRIY4g%2FhvWeJCym6qtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwB0Pb3KQEowiNXwsoq3AMyBp0vM%2FP1m8FgKeFpoI%2BMXaLPZyyoFsSJRBWi%2FMLd0drfTeC9vRqBdFDFPvWQZwmoPeWamviHmSgKhpOXjXkKlQKvOvlZIbe82FVaqlVJF3Q%2F%2BnM4rsFI0gfeAzkfz%2BX4cNzOVBs2yRaNo89hz718e4jRi8JJo3gUeNr2yUiLnH3xQdtHFD%2BMoH6DPoou7ZjyLMbsem4NW4aHV0JX3EgaLLmckIE6n4LDOLoqcKM4wGyzbh73oWYmUu2CUAocCJy0rZqqyIs5z5WUPKnVFgibaVw%2BCspBt6CxLlZkNdUPkLHHQa6M3Q0k0GFGpxrmvaXXb17SDt7qfzfT3Lyg4PAa9k1QtBMNtnyidLnettxT5fdrxsYhE5D6I7ZgJQMvIKHQx0TwB9tHGkY%2BatZykDa1xuZZNSQIZ9Vy%2BYHx%2Bz3cToFzt%2F3CluaW%2FgUmV%2FQX8UgP2BVhETALM%2FtGh%2F3YXKC15SQ9QRagxrWA96yDTdagvvgxj4W2eUQTxnImq%2FDe48r4aR2q133OioZFN1pQOKlaTuQ%2BX5Apk2Qz0B024ENYtKxX8%2BAIuSjWr7Q6DY9miVW%2BBkxkLgnpbynVA8xh8u1TeZnnTjlM6LZ%2B8QRsvKtcg3yekw0RY28OQusMZjCnq%2Fm%2BBjqkAbSHtCbN9n%2F6pdJxkANlVp7%2BI6YY%2BFLFlG%2F3ID88%2FNoQqAJ8grYxj1UNpCZwTwrSBkjKQq8E7%2BGKnDnazRKXyiR2Gkk3E38RrqGZmsHMQycArAqQB9qmI51w4oO%2BKSKzwqxELCyu9xtXYaWTEvCwzIJYtm3ZSJqzihaYDpZqbJ0t3pNL4FMi%2FY7Sv8KoJlVTfNPzPSFnLa%2BQxHzK3tqzU3fTmTXT&X-Amz-Signature=e5937571cb2741382397f55869d547dbb5a4eac1376dcb85caffa702e916d7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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
