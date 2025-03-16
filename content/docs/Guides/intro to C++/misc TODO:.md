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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M36HAYA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt1pA9ZFOd%2F9KBHDqzEuT9UlbmhqUKMk30P%2FfP9Y5BMwIhAIm5rQbkVcTKa%2BBZ%2Bx9m8YJPsKrV7GLExqcSkjo7LWlcKv8DCCAQABoMNjM3NDIzMTgzODA1IgwD0lGGYlT2tKfh970q3AOfMTxhJ%2FKo25NiHn8omkpXqvmTCn%2FEAk5h2ulYg0a9sFpQzhR2NFpmt5tJzu0RrdAcmElJmwHyfa0ZcmxzpkoGiS0BzHk3%2BOWskSNkf4uB88jZ8OZk75T7TfKGZ3tLzhUxTFTNWTghk05Lq773xJFVOPVMS5mk0kEeb1jYPiZ93LriPe3T87PkClZiVP%2BDTO3xmMo1Y3TPZDMsDd3ZlkVqCoWVOnkwt8uyrXWMtV0uF7NaGxenE%2BgXmXrf8GKHuvCyWQSNvEIMFQGYz6n3IUFS5744Sq8n3vqPSFXeBNH2Sx%2B3EwcHLoFIyNkecpKx4GQ0o7kjErZPz1FhTIq9H%2BQaL7tuZPZpL%2FoMufhLJQACXG0uHMfCxL5sG5USxvqszRbiFQnwlX03PEZWjrCHCyw54CTHWuQ4Vt%2FyUWozJj6j%2BjEELSRmh%2BtKriejfjYXAojkw2T7rXLAZnpoPwSV%2BCAtHy43fEJv6nqxI7v8rS%2B8QxU0J4ROVvpck8Zx1hVF%2F3IabZaI9IngpP85PJ6RQMfPmdoGoZANqSsL8kQE%2BE%2Btt10PFjhpU0gPWEiyjMoYOMgFR9JRj9u5j5WPlVDdZRi%2Bg1EVId5Vlg3WZFOQ6mzXi%2FJh61xk0%2FZCd7zbZTCBgti%2BBjqkAclNBTiwGuOGigXFEIca6%2Bq2nSzaEwhTXOpTjOTZuwpXFuSqqALUWkYp%2Bsa2eTaTsVwOATQV1KMUdsbDuu8tOeCdAHOezfOCbXAF9jX9gPcPxpecIHausn4O3pGBjQRU1DE17qD%2FIWi7KJIBBE4AhidK26Uk2eFWajuRr3swhPFUrEOi%2BwTZnfj0xb%2F7OaBD8HfULHNPgpETscbSwZe797fAVA8r&X-Amz-Signature=3579a2da14419a54c781cc5c31723bb30f081dd720de110d43de00981ca53623&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M36HAYA%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt1pA9ZFOd%2F9KBHDqzEuT9UlbmhqUKMk30P%2FfP9Y5BMwIhAIm5rQbkVcTKa%2BBZ%2Bx9m8YJPsKrV7GLExqcSkjo7LWlcKv8DCCAQABoMNjM3NDIzMTgzODA1IgwD0lGGYlT2tKfh970q3AOfMTxhJ%2FKo25NiHn8omkpXqvmTCn%2FEAk5h2ulYg0a9sFpQzhR2NFpmt5tJzu0RrdAcmElJmwHyfa0ZcmxzpkoGiS0BzHk3%2BOWskSNkf4uB88jZ8OZk75T7TfKGZ3tLzhUxTFTNWTghk05Lq773xJFVOPVMS5mk0kEeb1jYPiZ93LriPe3T87PkClZiVP%2BDTO3xmMo1Y3TPZDMsDd3ZlkVqCoWVOnkwt8uyrXWMtV0uF7NaGxenE%2BgXmXrf8GKHuvCyWQSNvEIMFQGYz6n3IUFS5744Sq8n3vqPSFXeBNH2Sx%2B3EwcHLoFIyNkecpKx4GQ0o7kjErZPz1FhTIq9H%2BQaL7tuZPZpL%2FoMufhLJQACXG0uHMfCxL5sG5USxvqszRbiFQnwlX03PEZWjrCHCyw54CTHWuQ4Vt%2FyUWozJj6j%2BjEELSRmh%2BtKriejfjYXAojkw2T7rXLAZnpoPwSV%2BCAtHy43fEJv6nqxI7v8rS%2B8QxU0J4ROVvpck8Zx1hVF%2F3IabZaI9IngpP85PJ6RQMfPmdoGoZANqSsL8kQE%2BE%2Btt10PFjhpU0gPWEiyjMoYOMgFR9JRj9u5j5WPlVDdZRi%2Bg1EVId5Vlg3WZFOQ6mzXi%2FJh61xk0%2FZCd7zbZTCBgti%2BBjqkAclNBTiwGuOGigXFEIca6%2Bq2nSzaEwhTXOpTjOTZuwpXFuSqqALUWkYp%2Bsa2eTaTsVwOATQV1KMUdsbDuu8tOeCdAHOezfOCbXAF9jX9gPcPxpecIHausn4O3pGBjQRU1DE17qD%2FIWi7KJIBBE4AhidK26Uk2eFWajuRr3swhPFUrEOi%2BwTZnfj0xb%2F7OaBD8HfULHNPgpETscbSwZe797fAVA8r&X-Amz-Signature=6cc3cfe42e3addc5c7f5dad34dbf0b83922525717dd14bc106b3ef2a7c112525&X-Amz-SignedHeaders=host&x-id=GetObject)

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
