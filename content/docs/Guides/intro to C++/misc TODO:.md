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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJBJIAZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcDchs9K7kTdY%2BA3HLm97ZaQUE9TTNHEMeEKdDdRx0gIhAJlv3eE%2BruLc5vY78znrknQnzQHdKGxB6aYsQWoIF4QqKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX%2B%2BFrG1ANltwY8ksq3AOW8oVBwjgmOJAenwQo81%2FOzVY%2BeHQc7Fp5oZSo3XlP5zd2imlETd3Jxy8McKLD0GA8LCMPul11GUBvFjlQMjgL5g32SpEGGoqxFmEG%2BpRoO745KF3aMJfERdSTUttag7YzsYhWczgsQQB%2BC0gL%2FdK2GPO3tnW5RoInWd1W%2BS1KRvzmPjCp7yA46wk2cnadQNyeFwlGPlZ4OYIJ5%2BAHc9Li2ewlsWPyOl6o25YifEruN%2FReIfMTCYX2SCnpSp1hfFQTUKm3TY585J6iP7HnMFQVOTh0OEC3OuZpRAlkFw%2BodNKxrJJnStNVXp8QAKcyQ1meoGIDH5VG3bXBqyvieW87dtiPT381B2lhhG7x2D8zqGta2htuqa0UiCrBs3RpswNG1Iq0l92ReFzddsNx4C45iL9p8IpHcBlzxCl56BIEZrD6zuALOpibHmbsiunIb%2FarcJ8mI1cijx2j4LFIiJc61eODz3NAgmk9lOcisfq5GX2ZW9Y1P85HBXzv8QzRqSb4HPprLEZ01rhSC7xNFFpmvHSzvjClumj58DZ5su4NMyjsk32udoVvTiZqV%2B4aKK1000OLb869VOjv7RjdDipAu4gto0x6oiF8pmtRtRUFb9xDiY8vEQCCy8BiKDD8kvfDBjqkATjNV0d80oCYLbrjZzLtiO1KJH%2ByXjJmKCTpf7djXdcgpXLK1LNt%2BGJfpmjX5Wz7QKqRwB8iGjhfj7aboG8GRY5E57qKeKTKFVho93%2FV4cx%2BIf%2B1f5EYYfuEAqKDdBAuANpu9okR24srargCVNtEgMp3oQ0fD1szPcmp04VUWX9HE4jyoLo4GS3CtXcoZRLOv7QZ%2FUbTZ1265oIOj0%2BTTM01gV3l&X-Amz-Signature=4dd903b6f445dc23917574b0afc551673e1dab67fb9b4a08ca7e2ea209ce58db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MJBJIAZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvcDchs9K7kTdY%2BA3HLm97ZaQUE9TTNHEMeEKdDdRx0gIhAJlv3eE%2BruLc5vY78znrknQnzQHdKGxB6aYsQWoIF4QqKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxX%2B%2BFrG1ANltwY8ksq3AOW8oVBwjgmOJAenwQo81%2FOzVY%2BeHQc7Fp5oZSo3XlP5zd2imlETd3Jxy8McKLD0GA8LCMPul11GUBvFjlQMjgL5g32SpEGGoqxFmEG%2BpRoO745KF3aMJfERdSTUttag7YzsYhWczgsQQB%2BC0gL%2FdK2GPO3tnW5RoInWd1W%2BS1KRvzmPjCp7yA46wk2cnadQNyeFwlGPlZ4OYIJ5%2BAHc9Li2ewlsWPyOl6o25YifEruN%2FReIfMTCYX2SCnpSp1hfFQTUKm3TY585J6iP7HnMFQVOTh0OEC3OuZpRAlkFw%2BodNKxrJJnStNVXp8QAKcyQ1meoGIDH5VG3bXBqyvieW87dtiPT381B2lhhG7x2D8zqGta2htuqa0UiCrBs3RpswNG1Iq0l92ReFzddsNx4C45iL9p8IpHcBlzxCl56BIEZrD6zuALOpibHmbsiunIb%2FarcJ8mI1cijx2j4LFIiJc61eODz3NAgmk9lOcisfq5GX2ZW9Y1P85HBXzv8QzRqSb4HPprLEZ01rhSC7xNFFpmvHSzvjClumj58DZ5su4NMyjsk32udoVvTiZqV%2B4aKK1000OLb869VOjv7RjdDipAu4gto0x6oiF8pmtRtRUFb9xDiY8vEQCCy8BiKDD8kvfDBjqkATjNV0d80oCYLbrjZzLtiO1KJH%2ByXjJmKCTpf7djXdcgpXLK1LNt%2BGJfpmjX5Wz7QKqRwB8iGjhfj7aboG8GRY5E57qKeKTKFVho93%2FV4cx%2BIf%2B1f5EYYfuEAqKDdBAuANpu9okR24srargCVNtEgMp3oQ0fD1szPcmp04VUWX9HE4jyoLo4GS3CtXcoZRLOv7QZ%2FUbTZ1265oIOj0%2BTTM01gV3l&X-Amz-Signature=c80e1cd265071f2f7342dd171e279ec6bceb88ddbdf31d509c2058bde146ae1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
