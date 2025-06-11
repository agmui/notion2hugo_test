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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GZFYYQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCEEg55CVoKdRuR0GSG3Fbn%2BgXvyom%2B8mWm7J8aiOcu1QIhAPee8WRlpnnAdEdd%2BfZetDx7HkeVecFr8moKaeY32h2lKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FFw%2B14l%2BUvHpnD30q3AMxaojnLrl2Voaty4jFU4gK4fg1QTkXr%2BlHkf9bPGgZad6lW8TxCBN%2BP4MCwvzKSW3CYfqk6%2BRRAH%2F2UWcJwYdFsNfNLPy40OOOwZe4oDEX3YrBU8lMxxrdWb3VtSze2G0jP%2B%2B6njP5CyJt0l%2B3V9oZYVRI0YccdRRgGnq8p6QDoTWBzG0Y7%2FMuybikRzFJ6bleLtSwzlYr3Snr42IkvEwBqSDSl%2FV6lfBpY7Z%2Btvm5GyjQB08YP0iZH%2BkiAQMg%2F8jDx1SiE49cBhRm4ia13SambR48vqaO2hmqHOy5KyuCFLzxZ8dZ6yma1E3NP%2BKfnh%2BbtVs970AyTniM9F6qbaVg7rp0Xl7ycgDWmzzzdLOJMb1QbPwAklkd8jt4yTq2%2BMhYBydIxaBn4L%2B6LW3Vnawal47dMITugDaBV1BTcXtrK2TMw3f6CKxB%2FtvzNgThYzAaAKZ6PNHc2UOO1raA9zWK9YsVnLIz6zpDKN3PyhyOOTEMTPHiTssi75E%2BQRB2jKy0In2Va8zK6wMw%2BBrDm7V%2FKwd3Z1B3yuJ%2BYFQFyNpP%2BhOv3NW3mCEo%2BDHUEKm%2BosVujpGT67UtfYfg6aQZtm6c2AdQrWqftzkDJRLFeJlzv5hHC10vkYS1oQwETTCuhqjCBjqkAXfr%2BV7FZWUbU5y16VsL1gHfywxOkm0bycH9ANIKmTcXrkh3kQgUP%2BU%2FRj1MXL%2Bfp68HVKIYbvekfAuRo7LW8F%2BVoF1%2FdUOz4ubDIwPfdECbnfdJi%2BqiQ52Yae%2FFlAPU4h2F8QFiZf6kRd36O4kgXZPTl1q5jCZL2uw7BWRwl3OVFn2hnTOlMsIEanNTGK2DZiqrvvAEu4fKFucedFSdPVcStnWg&X-Amz-Signature=b9487d0331f78289b1bc553e01a942226235a848a56e4a3428604fef0126a6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4GZFYYQ%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCEEg55CVoKdRuR0GSG3Fbn%2BgXvyom%2B8mWm7J8aiOcu1QIhAPee8WRlpnnAdEdd%2BfZetDx7HkeVecFr8moKaeY32h2lKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FFw%2B14l%2BUvHpnD30q3AMxaojnLrl2Voaty4jFU4gK4fg1QTkXr%2BlHkf9bPGgZad6lW8TxCBN%2BP4MCwvzKSW3CYfqk6%2BRRAH%2F2UWcJwYdFsNfNLPy40OOOwZe4oDEX3YrBU8lMxxrdWb3VtSze2G0jP%2B%2B6njP5CyJt0l%2B3V9oZYVRI0YccdRRgGnq8p6QDoTWBzG0Y7%2FMuybikRzFJ6bleLtSwzlYr3Snr42IkvEwBqSDSl%2FV6lfBpY7Z%2Btvm5GyjQB08YP0iZH%2BkiAQMg%2F8jDx1SiE49cBhRm4ia13SambR48vqaO2hmqHOy5KyuCFLzxZ8dZ6yma1E3NP%2BKfnh%2BbtVs970AyTniM9F6qbaVg7rp0Xl7ycgDWmzzzdLOJMb1QbPwAklkd8jt4yTq2%2BMhYBydIxaBn4L%2B6LW3Vnawal47dMITugDaBV1BTcXtrK2TMw3f6CKxB%2FtvzNgThYzAaAKZ6PNHc2UOO1raA9zWK9YsVnLIz6zpDKN3PyhyOOTEMTPHiTssi75E%2BQRB2jKy0In2Va8zK6wMw%2BBrDm7V%2FKwd3Z1B3yuJ%2BYFQFyNpP%2BhOv3NW3mCEo%2BDHUEKm%2BosVujpGT67UtfYfg6aQZtm6c2AdQrWqftzkDJRLFeJlzv5hHC10vkYS1oQwETTCuhqjCBjqkAXfr%2BV7FZWUbU5y16VsL1gHfywxOkm0bycH9ANIKmTcXrkh3kQgUP%2BU%2FRj1MXL%2Bfp68HVKIYbvekfAuRo7LW8F%2BVoF1%2FdUOz4ubDIwPfdECbnfdJi%2BqiQ52Yae%2FFlAPU4h2F8QFiZf6kRd36O4kgXZPTl1q5jCZL2uw7BWRwl3OVFn2hnTOlMsIEanNTGK2DZiqrvvAEu4fKFucedFSdPVcStnWg&X-Amz-Signature=be78041c21f74bfef6e5ebbbf8bf4688d7b95d604a8c51d1f29b35dfd67596e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
