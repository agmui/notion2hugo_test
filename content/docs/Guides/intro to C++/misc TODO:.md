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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU442L55%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDYCtzJIi7LjQ%2BJBVhEoNcK0R9JLibnWLqc1biVORM0gAIgF9GT5n7k%2B8h71e825L5gtTFwonkc7veWUarOkKsw9SMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBJSR4s9g1iwPCcvlCrcA9r0%2FfTeiqt0VFEpzLICNnSUdF%2BH9i8mEbKywoIifcbjq3VrwAc6eHJ0RNg40s%2BtRdNaWU7N9uFFIGOsmQBBrBvnGEv6zwmkCD9X%2BIasGH%2FjXNZ7WO9JbAk7z1MXcit%2FxmHV3smBPm2xYOX3rvLj5iEI4sagzeob25rC8uCLnBmK%2FCla%2B7Q4jsPIHGNm387F3%2F4%2Bq6%2FH8M9uyn8xXMjhkr%2Fq2%2BSuvAk%2F%2F%2Bg6Fl26KaxK8rMeUrF93rvn5SmPxvhrZZeKls752%2BvEz31nRXXwBEMv0I%2F2jQPcRaulnmjGDNwPh7205B6TK%2BhfIuQPr2JNB0%2B7UJNM%2BO29G4VykXUdUExTeus2vCcHtWYyz%2BCOK35nq0VHtj%2BCtOOwCeaZkps%2BpdNZHDgyEyjiKNtwqLw2pTAoYdgCZmwjTDSuogmMCJNXp7hwZ38f3JIOZB5YspQb5fixrUKJzjkML13T8fvnDFf6oAfxLlz0RyfcLTfv55Y4PF%2BJUBg6KziRIsk7ZQBgC3CCQNR%2BDwtsUUoe48jJgrfHBLAZYKBsr6E45HYrjL0nu%2Bm7I%2BycZBsC2UWd5uNi%2BivFT%2FHfDizh8LTxTenbksOjlmzWzrXBjv3CKRfRSwhrgPJczkaxOP8z90zTMO2xicQGOqUBurE%2FWh0EVi93FQhCwzfdDcu4mteWHN5LTPmRtFo8QkArnOC6HJJUxrZR6%2FfoIwPV5ZCGHeoxBEOE0RIFJBIrDVKhRVisinvDMed5DMBLsVaubyQ%2FyLmmpdpoo0uzC3Preyutr1bhpeC7YJAwH5DB%2Bmg8aLyGt1iLszFKKBbDONdWWrtpwQjLbCFfrGfWYALlyWoXrP2g2hBcpEXnJ4sJWtWoi2lE&X-Amz-Signature=2255d0aa83c830f97efc39d028679a1a4a350ee4a139b6c7ce2ea9402c20df70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU442L55%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDYCtzJIi7LjQ%2BJBVhEoNcK0R9JLibnWLqc1biVORM0gAIgF9GT5n7k%2B8h71e825L5gtTFwonkc7veWUarOkKsw9SMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBJSR4s9g1iwPCcvlCrcA9r0%2FfTeiqt0VFEpzLICNnSUdF%2BH9i8mEbKywoIifcbjq3VrwAc6eHJ0RNg40s%2BtRdNaWU7N9uFFIGOsmQBBrBvnGEv6zwmkCD9X%2BIasGH%2FjXNZ7WO9JbAk7z1MXcit%2FxmHV3smBPm2xYOX3rvLj5iEI4sagzeob25rC8uCLnBmK%2FCla%2B7Q4jsPIHGNm387F3%2F4%2Bq6%2FH8M9uyn8xXMjhkr%2Fq2%2BSuvAk%2F%2F%2Bg6Fl26KaxK8rMeUrF93rvn5SmPxvhrZZeKls752%2BvEz31nRXXwBEMv0I%2F2jQPcRaulnmjGDNwPh7205B6TK%2BhfIuQPr2JNB0%2B7UJNM%2BO29G4VykXUdUExTeus2vCcHtWYyz%2BCOK35nq0VHtj%2BCtOOwCeaZkps%2BpdNZHDgyEyjiKNtwqLw2pTAoYdgCZmwjTDSuogmMCJNXp7hwZ38f3JIOZB5YspQb5fixrUKJzjkML13T8fvnDFf6oAfxLlz0RyfcLTfv55Y4PF%2BJUBg6KziRIsk7ZQBgC3CCQNR%2BDwtsUUoe48jJgrfHBLAZYKBsr6E45HYrjL0nu%2Bm7I%2BycZBsC2UWd5uNi%2BivFT%2FHfDizh8LTxTenbksOjlmzWzrXBjv3CKRfRSwhrgPJczkaxOP8z90zTMO2xicQGOqUBurE%2FWh0EVi93FQhCwzfdDcu4mteWHN5LTPmRtFo8QkArnOC6HJJUxrZR6%2FfoIwPV5ZCGHeoxBEOE0RIFJBIrDVKhRVisinvDMed5DMBLsVaubyQ%2FyLmmpdpoo0uzC3Preyutr1bhpeC7YJAwH5DB%2Bmg8aLyGt1iLszFKKBbDONdWWrtpwQjLbCFfrGfWYALlyWoXrP2g2hBcpEXnJ4sJWtWoi2lE&X-Amz-Signature=54dbee2ad7f89d2f522f359d0c9f53f7e6331e21a20dc81f8cae8113a406a060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
