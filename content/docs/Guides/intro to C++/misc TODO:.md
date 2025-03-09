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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEMK7HU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICQif4cLyPkTerGxe9nPurtjsiLWxEuNcUhFbr9BsQLuAiBIE3ChILlQCXSsnhFKG%2BJm%2BJVMz2OauxmahAJc8iLnJCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKAr49%2FrqjffJ709HKtwDq%2Fm9xlZhLwzTYntNfFeugQumlvqmhhc5YQlz52C08KFbaeW5pOPQj1TIPOvpR8PX%2FexfWjtqYgTcr%2FkadV6Ehz3OWbFNbaDkrROgYisiWxowRnLMyzm8hzWmCAk38SK5bojPk46O3wawvWCHc43p6WC9nl8ivLJLizBaB6IdHrJF%2FMiKaI8PCnT%2BduUGorkqPjHtCKmlDZkw9O8MqNL%2F9TDlbPCWn9zVVzpjMrzyJqZm7GL6yXzjdRwU50%2FxaJ9%2Fz%2BCEevrQsQrsd8OFUVTx85iXm221fw1ixhytyInOA%2Bku17rMXtfYBEEJnDoCbBBVvJ5UWp%2F024B529YgnDMvG%2FkWcUaIs%2FhQW6T1spZy1RFJsGowk8FlR%2FeMUzYSh1m4KBzJK9PBDj0FhzCoXf5zYzoTjrW%2FnyKPuVvr315xvGgDxbSK6CxhDL9U5rR8jkETnq7G28B6K9HlKAhXRMWj5N1Nb4Wx1YGX7yKh8OUF1hW%2BrMZ11L%2BZXHkBW2Ywh7hFhNC8EEiSKv6bp0gXOdkIAnc5%2FTPJ9mcYm0O62yMHSmXt6PEJtxxuXDmryA5t9PoqnkRcQJOTTXSwdB6z4TERofoWemIF3bfyV%2BImgKfulBlSxKK%2FB3hpXDe5SOwwoY%2B2vgY6pgFU3HMr7Ysvpl2Moe0%2BedS3Wa08eNeL%2FM4s0n9UaPCa7fQ9mR8iEfJAzzATlN2%2Ft%2BIk0ZBIAw19tkAXw5B7KNAXj27e%2B7leY6XEvqILxMaEpcu5YaX6dsgWVWd1gyloUbx0WUQFgCn5FrLRB3aDgrSDmr9qUCdbC%2BDFLn28MwEPvqwZ6VU5bJUmjnnmVa7D8icZAy3HS1sL28dI9xiAD9BB2UzEZ1os&X-Amz-Signature=2b21fd6c34dd11dae1453b132f8fb25859303440967aa96eaae3c8fac91f65d6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYEMK7HU%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCICQif4cLyPkTerGxe9nPurtjsiLWxEuNcUhFbr9BsQLuAiBIE3ChILlQCXSsnhFKG%2BJm%2BJVMz2OauxmahAJc8iLnJCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMKAr49%2FrqjffJ709HKtwDq%2Fm9xlZhLwzTYntNfFeugQumlvqmhhc5YQlz52C08KFbaeW5pOPQj1TIPOvpR8PX%2FexfWjtqYgTcr%2FkadV6Ehz3OWbFNbaDkrROgYisiWxowRnLMyzm8hzWmCAk38SK5bojPk46O3wawvWCHc43p6WC9nl8ivLJLizBaB6IdHrJF%2FMiKaI8PCnT%2BduUGorkqPjHtCKmlDZkw9O8MqNL%2F9TDlbPCWn9zVVzpjMrzyJqZm7GL6yXzjdRwU50%2FxaJ9%2Fz%2BCEevrQsQrsd8OFUVTx85iXm221fw1ixhytyInOA%2Bku17rMXtfYBEEJnDoCbBBVvJ5UWp%2F024B529YgnDMvG%2FkWcUaIs%2FhQW6T1spZy1RFJsGowk8FlR%2FeMUzYSh1m4KBzJK9PBDj0FhzCoXf5zYzoTjrW%2FnyKPuVvr315xvGgDxbSK6CxhDL9U5rR8jkETnq7G28B6K9HlKAhXRMWj5N1Nb4Wx1YGX7yKh8OUF1hW%2BrMZ11L%2BZXHkBW2Ywh7hFhNC8EEiSKv6bp0gXOdkIAnc5%2FTPJ9mcYm0O62yMHSmXt6PEJtxxuXDmryA5t9PoqnkRcQJOTTXSwdB6z4TERofoWemIF3bfyV%2BImgKfulBlSxKK%2FB3hpXDe5SOwwoY%2B2vgY6pgFU3HMr7Ysvpl2Moe0%2BedS3Wa08eNeL%2FM4s0n9UaPCa7fQ9mR8iEfJAzzATlN2%2Ft%2BIk0ZBIAw19tkAXw5B7KNAXj27e%2B7leY6XEvqILxMaEpcu5YaX6dsgWVWd1gyloUbx0WUQFgCn5FrLRB3aDgrSDmr9qUCdbC%2BDFLn28MwEPvqwZ6VU5bJUmjnnmVa7D8icZAy3HS1sL28dI9xiAD9BB2UzEZ1os&X-Amz-Signature=f1c7b4aad78578726107c4ce0714826aab279ff1347cd8806e42a987743d67d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
