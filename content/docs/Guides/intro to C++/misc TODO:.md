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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD7GK2WN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSWr%2BCAgME1BYi8Q6DDA8slZ%2F7MnZT4QAbPcyFXwEDSgIgWmZjqXLQgPAN%2Ft6TwkqE9vGnWZsG2Nq%2BALwzXXyWVpsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGMszmq9rtwdRyrjnyrcA12TBSRP3X3eGIf1d616ZykJ%2BYTwNC0u6LX67tOFUh954nmYEcpBf88pe9EhpkV%2B3tM1F%2FUjCep9ZgYz3TLETeny1%2FGh7HILbdeP0d8Uo5JvtMXslnPCN8atXLnU37v%2BByVx01s27te1LuE1qqUxv7zWIE1VbCGLjXZ%2BZW%2FfqsymNJ8ULWNEdqIDviq0G5JBFRCr2XnEhTx%2FkT36T8tEi4f%2BiuoPVx00sv20VSFqyjHxrnS72Nifxh5TLP2HLN5B%2F1PRwxHN8ahHINXO%2Bz6ddWlHnH%2BdpvluhlWll9de1AHCeSsdaovUirJwezuNcn2T0rqIV9qM87UnKf%2BPTDBWFpG%2BJNKtPrwPgGQSrhwVUXX0fuXgjQESyGY5sWkpqfBOO611NBSYeV0b0PTnfhmQRF%2BBEbO%2F7K4n6mXgys2bpDeOAdZF2HL4eBFtb8lvBVs5OIvorXThIGW4vQD7HnwfluPC6SSRXZYmwTj8mqZRveVwmXxJ5gnxUyuHxvq6uR4ZTkGzwkt9Srn18UqwsOaJ1i1k%2FaPLAgXO05fcXUnQyNlB5FTJqJkylu6vuOLF%2FDFGtAVZOgrJynAHJA%2Fbmz33CwtddI2SzJJJmx1CsXO6IN1DY7IV0npgmBPWnwr%2FMJL3lL8GOqUBvA3QHIyKtap9XoPkelQI5FZRH8WTANqUvsBcmV2%2FMR%2FKAEToqKpXNBZzIeBGlSGAra7JgzJ7cmqWfkmU481foy%2BcSiYJEOYv7JLWWDEwOne8JzIu7NJXuOF%2B%2FyCDAbx58uQL%2FBtx3LzXbVPvC3RVy8nwBABAwkndTH%2FrP1rh5dQVllxdVx1GI82iyt%2FC2i9c%2BPL%2FdVsvnPD7HGbnS5syvHhBcd2s&X-Amz-Signature=695b1f69804ddcfa7c5baf67cb5a08852e79e84831a9904d072a6cd44fb88f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD7GK2WN%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSWr%2BCAgME1BYi8Q6DDA8slZ%2F7MnZT4QAbPcyFXwEDSgIgWmZjqXLQgPAN%2Ft6TwkqE9vGnWZsG2Nq%2BALwzXXyWVpsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDGMszmq9rtwdRyrjnyrcA12TBSRP3X3eGIf1d616ZykJ%2BYTwNC0u6LX67tOFUh954nmYEcpBf88pe9EhpkV%2B3tM1F%2FUjCep9ZgYz3TLETeny1%2FGh7HILbdeP0d8Uo5JvtMXslnPCN8atXLnU37v%2BByVx01s27te1LuE1qqUxv7zWIE1VbCGLjXZ%2BZW%2FfqsymNJ8ULWNEdqIDviq0G5JBFRCr2XnEhTx%2FkT36T8tEi4f%2BiuoPVx00sv20VSFqyjHxrnS72Nifxh5TLP2HLN5B%2F1PRwxHN8ahHINXO%2Bz6ddWlHnH%2BdpvluhlWll9de1AHCeSsdaovUirJwezuNcn2T0rqIV9qM87UnKf%2BPTDBWFpG%2BJNKtPrwPgGQSrhwVUXX0fuXgjQESyGY5sWkpqfBOO611NBSYeV0b0PTnfhmQRF%2BBEbO%2F7K4n6mXgys2bpDeOAdZF2HL4eBFtb8lvBVs5OIvorXThIGW4vQD7HnwfluPC6SSRXZYmwTj8mqZRveVwmXxJ5gnxUyuHxvq6uR4ZTkGzwkt9Srn18UqwsOaJ1i1k%2FaPLAgXO05fcXUnQyNlB5FTJqJkylu6vuOLF%2FDFGtAVZOgrJynAHJA%2Fbmz33CwtddI2SzJJJmx1CsXO6IN1DY7IV0npgmBPWnwr%2FMJL3lL8GOqUBvA3QHIyKtap9XoPkelQI5FZRH8WTANqUvsBcmV2%2FMR%2FKAEToqKpXNBZzIeBGlSGAra7JgzJ7cmqWfkmU481foy%2BcSiYJEOYv7JLWWDEwOne8JzIu7NJXuOF%2B%2FyCDAbx58uQL%2FBtx3LzXbVPvC3RVy8nwBABAwkndTH%2FrP1rh5dQVllxdVx1GI82iyt%2FC2i9c%2BPL%2FdVsvnPD7HGbnS5syvHhBcd2s&X-Amz-Signature=5cddeb9a6079be910543fd82d7b12e9ff0799836e549fd1fd9b24972313a8d61&X-Amz-SignedHeaders=host&x-id=GetObject)

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
