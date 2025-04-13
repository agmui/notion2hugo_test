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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646V7IOLW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD%2FQLYU3As4guKwdj7H%2Fn0b4OOBh9uQOfHp7jPpBrzbpQIhAPTONx3WjI7Zl0sfp%2Bo%2BiOypuVCVzpDqJMIeokNQl8sxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcGVIJzjK5CcPIXtAq3AO8QC%2BIBkxoVHOfSB4C4gG5JhKE3HFVcIsu0g%2FdOWy9JEo%2BXNf9K3NJRNYFOlccgI09T5%2FXRx3FLs3%2F31ifxn%2FeSe%2B%2BVqpqD3GdNkDQTXLgWUrP7J3URTUl%2B8MmNccLQDM8jfuOsVoY%2BJxwXkvn9sT0QuVnJPUc3EIATJDmJ7LdRVdyW3xwJmpETbcJ67yMTz3SuiJu%2BWlW4ZWv7eMV5JEHukfnoK%2BR%2BfuLDurD%2FR0Ai6k4sf0sl196ktR34fVToyu1wgd3%2FRcROwRC7ecd1fSYV50hdi44%2FYapD4y9sKLDNAQBEpe55A46Gh%2BYAyen5ESCYPOIaSc1FcK2y1r5gd2RZXciM9CAg%2BH%2FmYaYsVfLQuemDel4OA66T%2FIdU9%2FOPI5ujfexo1hQ5FtvxP0GddXa8QMyqEQDAA42zSNDi3fI2NlJcjpK7o7vs0pzd3kdRxQbV7ENv%2B%2BN8EX3PUL9kUHcQGzRoIllG3V5YfQdZmPgRxKGfabB%2FNPX9IhQzXGHJMTk9QeqWtH4RptlOff9MiNSYq6rczw5wYaI8ROKGgA74D5CsRrgsWbARdYqwjyHfz9G4pUOfLGokTFxqJvjY2VhYwBzAmbDFRSnI%2B3dtF6%2BSvmgJZW2Y%2B0x44x1sDDVve6%2FBjqkAajlYCPaD2kfspVi4mIGJvf3ifdId%2BMT0bkg4HuCUWW2s19qtEzrl%2FWnikvAgYWy0Rax3m4AgzhPKmcU7IXLPSD3NTUmpSoogbVnTZjQc1Z%2FNYQjyGApZImLyJtoCaSRVOzQFQKY96SQ892WKB3%2FvYq7bCPvi1B30QiqdInZt7Xz4kd%2Ft4V%2B5vcDZXRD38J6xvvuZkXhv3mia7WeqlYbVObf6s4p&X-Amz-Signature=52014f419ddfaab1322d6d270eb416660dde8924acfcd07c0e4881aa919c30a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646V7IOLW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQD%2FQLYU3As4guKwdj7H%2Fn0b4OOBh9uQOfHp7jPpBrzbpQIhAPTONx3WjI7Zl0sfp%2Bo%2BiOypuVCVzpDqJMIeokNQl8sxKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcGVIJzjK5CcPIXtAq3AO8QC%2BIBkxoVHOfSB4C4gG5JhKE3HFVcIsu0g%2FdOWy9JEo%2BXNf9K3NJRNYFOlccgI09T5%2FXRx3FLs3%2F31ifxn%2FeSe%2B%2BVqpqD3GdNkDQTXLgWUrP7J3URTUl%2B8MmNccLQDM8jfuOsVoY%2BJxwXkvn9sT0QuVnJPUc3EIATJDmJ7LdRVdyW3xwJmpETbcJ67yMTz3SuiJu%2BWlW4ZWv7eMV5JEHukfnoK%2BR%2BfuLDurD%2FR0Ai6k4sf0sl196ktR34fVToyu1wgd3%2FRcROwRC7ecd1fSYV50hdi44%2FYapD4y9sKLDNAQBEpe55A46Gh%2BYAyen5ESCYPOIaSc1FcK2y1r5gd2RZXciM9CAg%2BH%2FmYaYsVfLQuemDel4OA66T%2FIdU9%2FOPI5ujfexo1hQ5FtvxP0GddXa8QMyqEQDAA42zSNDi3fI2NlJcjpK7o7vs0pzd3kdRxQbV7ENv%2B%2BN8EX3PUL9kUHcQGzRoIllG3V5YfQdZmPgRxKGfabB%2FNPX9IhQzXGHJMTk9QeqWtH4RptlOff9MiNSYq6rczw5wYaI8ROKGgA74D5CsRrgsWbARdYqwjyHfz9G4pUOfLGokTFxqJvjY2VhYwBzAmbDFRSnI%2B3dtF6%2BSvmgJZW2Y%2B0x44x1sDDVve6%2FBjqkAajlYCPaD2kfspVi4mIGJvf3ifdId%2BMT0bkg4HuCUWW2s19qtEzrl%2FWnikvAgYWy0Rax3m4AgzhPKmcU7IXLPSD3NTUmpSoogbVnTZjQc1Z%2FNYQjyGApZImLyJtoCaSRVOzQFQKY96SQ892WKB3%2FvYq7bCPvi1B30QiqdInZt7Xz4kd%2Ft4V%2B5vcDZXRD38J6xvvuZkXhv3mia7WeqlYbVObf6s4p&X-Amz-Signature=316ee37f1a2b5b25cfb29897c7e9a2b16f840b777c65d8cb0382f3316dfe4337&X-Amz-SignedHeaders=host&x-id=GetObject)

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
